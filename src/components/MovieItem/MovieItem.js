// import Modal from "../Modal/Modal";
// import PropTypes from "prop-types";
import s from "../MovieItem/MovieItem.module.css";

export function MovieItem({ poster, id, name }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <li className={s.galleryItem} key={id}>
      <img
        // src={`https://image.tmdb.org/t/p/w500/${poster}`}
        src={`${imageUrl}${poster}`}
        alt={name}
        className={s.imageGalleryItem}
        //   onClick={onClick}
      />
    </li>
  );
}

// ImageGalleryItem.propsTypes = {
//   webformatURL: PropTypes.string,
//   tags: PropTypes.string,
//   largeImageURL: PropTypes.string,
//   onClick: PropTypes.func,
//   modalImg: PropTypes.string,
//   showModal: PropTypes.bool,
//   toggleModal: PropTypes.func,
// };
