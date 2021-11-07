import { useEffect, useState } from "react";
import MoviedFetch from "../../services/theMoviedDB";
import s from "../HomePage/HomePage.module.css";
import { MovieItem } from "../../components/MovieItem/MovieItem";
import { Button } from "../../components/Button/Button";
import Loader from "react-loader-spinner";

const newMoviedFetch = new MoviedFetch();

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    newMoviedFetch.resetPage();
    setLoader(true);
    newMoviedFetch
      .trendingMovies()
      .then((movies) => {
        setMovies(movies);
        setLoader(false);
      })
      .catch((error) => setError(error));
  }, []);

  const onLoadMore = () => {
    newMoviedFetch.page = 1;
    newMoviedFetch
      .trendingMovies()
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
              // onClick={onClickModalImg}
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
