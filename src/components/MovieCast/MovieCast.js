import PropTypes from "prop-types";
import s from "../MovieCast/MovieCast.module.css";
import notFoundImage from "../../images/not-found-image.jpeg";

export default function MovieCast({ cast }) {
  const imageUrl = "https://image.tmdb.org/t/p/w200";

  return (
    <div>
      <h3 className={s.title}>Actors</h3>
      <ul className={s.list}>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              className={s.image}
              src={
                actor.profile_path
                  ? `${imageUrl}${actor.profile_path}`
                  : notFoundImage
              }
              alt={actor.original_name}
            />
            <p className={s.text}>{actor.original_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieCast.propsTypes = {
  cast: PropTypes.string,
};
