import notFoundImage from "../../images/not-found-image.jpeg";
import s from "../MovieDetails/MovieDetails.module.css";

export default function MovieDetails({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w200";
  const imagePoster = movie.poster_path
    ? `${imageUrl}${movie.poster_path}`
    : notFoundImage;
  return (
    <article className={s.article}>
      <img className={s.image} src={imagePoster} alt={movie.original_title} />
      <div className={s.content}>
        <h2 className={s.title}>{movie.original_title}</h2>
        <span className={s.text}>{movie.release_date}</span>
        <h3 className={s.title}>Popularity</h3>
        <p className={s.text}>{movie.popularity}</p>
        <h3 className={s.title}>Overview</h3>
        <p className={s.text}>{movie.overview}</p>
        <h3 className={s.title}>Genres</h3>
        <p className={s.text}>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
      </div>
    </article>
  );
}
