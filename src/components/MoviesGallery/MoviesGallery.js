import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import s from "../MoviesGallery/MoviesGallery.module.css";
import { MovieItem } from "../MovieItem/MovieItem";
import { Button } from "../Button/Button";
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";
import MoviedFetch from "../../services/theMoviedDB";
import { useLS } from "../hooks/LS";

const newMoviedFetch = new MoviedFetch();

export default function MoviesGallery({ value }) {
  const [movies, setMovies] = useLS("movies", []);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!value) return;
    newMoviedFetch.resetPage();
    setLoader(true);
    newMoviedFetch.searchQuery = value;
    newMoviedFetch
      .searchMovies()
      .then((movies) => {
        if (movies.length === 0) {
          toast.warn("Nothihg found for this name! Enter correct name!");
          setMovies([]);
          return;
        }
        setMovies(movies);
        setLoader(false);
        console.log(movies);
      })
      .catch((error) => setError(error));
  }, [value, setMovies]);

  const onLoadMore = () => {
    newMoviedFetch.page = 1;
    newMoviedFetch
      .searchMovies()
      .then((movies) => {
        setMovies((prev) => [...prev, ...movies]);
      })
      .then(ScrollImages)
      .catch((error) => setError(error));
  };

  const ScrollImages = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {loader && (
        <Loader
          type="Bars"
          color="#00BFFF"
          height={200}
          width={200}
          timeout={3000}
        />
      )}
      <ul className={s.gallery}>
        {movies.length > 0 &&
          movies.map(({ poster_path, id, original_title }) => (
            <MovieItem
              key={id}
              id={id}
              poster={poster_path}
              name={original_title}
            />
          ))}
      </ul>
      {movies.length >= 20 && <Button onClick={onLoadMore} />}
    </>
  );
}

MoviesGallery.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
};
