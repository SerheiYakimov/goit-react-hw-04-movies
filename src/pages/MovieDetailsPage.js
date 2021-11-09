import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Route, useHistory, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import MoviedFetch from "../services/theMoviedDB";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import MovieCast from "../components/MovieCast/MovieCast";

const newMoviedFetch = new MoviedFetch();

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    newMoviedFetch
      .searchMoviesId(params.movieId)
      .then((movie) => {
        if (location.state) {
          setMovie(movie);
        } else {
          history.push((location.pathname = "/notFound"));
        }
      })
      .catch((error) => alert(error));
  }, [params.movieId, history, location]);

  useEffect(() => {
    newMoviedFetch
      .searchMoviesCast(params.movieId)
      .then(setCast)
      .catch((error) => alert(error));
  }, [params.movieId]);
  // console.log('cast', cast);

  const handleClick = () => {
    history.push(location?.state?.from?.location ?? "/movies");
  };

  return (
    <>
      <h1>Movie Details</h1>
      <button type="button" onClick={handleClick}>
        {location?.state?.from?.label ?? "Go Back"}
      </button>
      {movie && <MovieDetails movie={movie} />}
      <h2>Additional Information</h2>
      <ul>
        <li>
          <Link
            to={{
              pathname: `/movies/${params.movieId}/cast`,
              state: {
                from: history.location.state?.from ?? "/movies",
                label: "back to movies from cast",
              },
            }}
          >
            Cast
          </Link>
        </li>
        <li></li>
      </ul>
      <Route path="/movies/:movieId/cast">
        {cast && <MovieCast cast={cast} />}
      </Route>
      {/* <Route path="/movies/:movieId/reviews">
            <MovieReviews />
        </Route> */}
    </>
  );
}

MovieDetailsPage.propsTypes = {
  handleClick: PropTypes.func,
  movie: PropTypes.string,
};
