// import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import s from "../MovieItem/MovieItem.module.css";
import notFoundImage from "../../images/not-found-image.jpeg";
// import { useEffect } from "react";
// import MoviedFetch from "../../services/theMoviedDB";

// const newMoviedFetch = new MoviedFetch();

export function MovieItem({ poster, id, name }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const imagePoster = poster ? `${imageUrl}${poster}` : notFoundImage;

  // useEffect(() => {
  //   newMoviedFetch().searchMoviesId()
  // }
  // )

  return (
    <li className={s.galleryItem} key={id}>
      <p>{`${name}`}</p>
      <img
        src={imagePoster}
        alt={name}
        className={s.imageGalleryItem}
        //   onClick={onClick}
      />
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

  // onClick: PropTypes.func,
};
