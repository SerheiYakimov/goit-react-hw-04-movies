import notFoundImage from "../../images/not-found-image.jpeg";

export default function MovieDetails({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w200";
  const imagePoster = movie.poster_path
    ? `${imageUrl}${movie.poster_path}`
    : notFoundImage;
  return (
    <article>
      <img src={imagePoster} alt={movie.original_title} />
      <div>
        <h2>{movie.original_title}</h2>
        <span>{movie.release_date}</span>
        <h3>Popularity</h3>
        <p>{movie.popularity}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
    </article>
  );
}
