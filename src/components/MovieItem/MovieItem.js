import PropTypes from "prop-types";
import s from "../MovieItem/MovieItem.module.css";
import notFoundImage from "../../images/not-found-image.jpeg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export function MovieItem({ poster, id, name }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const imagePoster = poster ? `${imageUrl}${poster}` : notFoundImage;
  const location = useLocation();

  return (
    <li className={s.galleryItem} key={id}>
      <h1>{`${name}`}</h1>
      <Link
        to={{
          pathname: `/movies/${id}`,
          state: {
            from: { location, label: `back to movies` },
          },
        }}
      >
        <img src={imagePoster} alt={name} className={s.imageGalleryItem} />
      </Link>
    </li>
  );
}

MovieItem.defaultProps = {
  poster: notFoundImage,
};

MovieItem.propsTypes = {
  poster: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
};
