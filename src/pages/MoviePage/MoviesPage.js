import { useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import { ToastContainer } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export default function MoviesPage() {
  const [value, setValue] = useState("");

  const getFormSubmitValue = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={getFormSubmitValue} />
      <MoviesGallery value={value} />
      <ToastContainer position="top-left" autoClose={3000} />
    </div>
  );
}

MoviesPage.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
};
