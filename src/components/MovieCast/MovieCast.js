import notFoundImage from "../../images/not-found-image.jpeg";

export default function MovieCast({ cast }) {
  const imageUrl = "https://image.tmdb.org/t/p/w200";

  return (
    <div>
      <h3>Actors</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `${imageUrl}${actor.profile_path}`
                  : notFoundImage
              }
              alt={actor.original_name}
            />
            <h3>{actor.original_name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
