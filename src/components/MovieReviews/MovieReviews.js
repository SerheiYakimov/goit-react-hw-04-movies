import PropTypes from "prop-types";
import s from "../MovieReviews/MovieReviews.module.css";

export default function MovieReviews({ reviews }) {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Reviews</h3>
      <ul className={s.list}>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4 className={s.title}>{review.author}</h4>
            <p className={s.text}>{review.content}</p>
          </li>
        ))}
      </ul>
      {reviews.length === 0 && <p className={s.notext}> no reviews yet!</p>}
    </div>
  );
}

MovieReviews.propsTypes = {
  rewievs: PropTypes.string,
};
