import { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import MoviedFetch from "../services/theMoviedDB";
import MovieDetails from "../components/MovieDetails/MovieDetails";

const newMoviedFetch = new MoviedFetch();

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const [movie, setMovie] = useState(null);

  // newMoviedFetch.searchMoviesId(params.movieId).then(movie => {
  //     if (location.state) {
  //         setMovie(movie)
  //     }

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
      {/* <MovieDetails movie={movie} /> */}
    </>
  );
}
