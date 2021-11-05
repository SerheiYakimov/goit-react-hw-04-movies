import { useEffect, useState } from "react";
import MoviedFetch from "../services/theMoviedDB";
import s from "../pages/HomePage.module.css";
import { MovieItem } from "../components/MovieItem/MovieItem";

const newMoviedFetch = new MoviedFetch();

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    newMoviedFetch.resetPage();
    newMoviedFetch
      .trendingMovies()
      .then((movies) => {
        setMovies(movies);
        console.log(movies);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <>
      {/* {loader && (
          <Loader
            type="Bars"
            color="#00BFFF"
            height={200}
            width={200}
            timeout={3000}
          />
        )} */}
      <ul className={s.gallery}>
        {movies.length > 0 &&
          movies.map(({ poster_path, id, title }) => (
            <MovieItem
              // onClick={onClickModalImg}
              key={id}
              id={id}
              poster={poster_path}
              name={title}
            />
          ))}
      </ul>
      {/* {searchResult.length >= 12 && <Button onClick={onLoadMore} />} */}
    </>
  );
}

// useEffect(
//     () => {
//       if (!value) return;
//       newPixabayFetch.resetPage();
//       setLoader(true);
//       newPixabayFetch.searchQuery = value;
//       newPixabayFetch
//         .searchPhotos()
//         .then((searchResult) => {
//           if (searchResult.length === 0) {
//             toast.warn("Nothihg found for this name! Enter correct name!");
//             setSearchResult([]);
//             return;
//           }
//           setSearchResult(searchResult);
//           setLoader(false);
//         })
//         .catch((error) => setError(error));
//     }, [value]
//   );

//   const onLoadMore = () => {
//     newPixabayFetch.page = 1;
//     setLoader(true);
//     newPixabayFetch
//       .searchPhotos()
//       .then(searchResult => {
//         setSearchResult(prev =>
//         [...prev, ...searchResult])
//           setLoader(false);
//       })
//       .then(ScrollImages)
//       .catch((error) => setError(error));
//   }

//   const ScrollImages = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     });
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   }

//   const onClickModalImg = (e) => {
//     const { img } = e.target.dataset;
//     setModalImg(img);
//     toggleModal();
//   }

// return (
//       <>
//         {loader && (
//           <Loader
//             type="Bars"
//             color="#00BFFF"
//             height={200}
//             width={200}
//             timeout={3000}
//           />
//         )}
//         <ul className={s.gallery}>
//           {searchResult.length > 0 &&
//             searchResult.map(({ id, webformatURL, tags, largeImageURL }) => (
//               <ImageGalleryItem
//                 onClick={onClickModalImg}
//                 key={id}
//                 id={id}
//                 webformatURL={webformatURL}
//                 tags={tags}
//                 largeImageURL={largeImageURL}
//                 modalImg={modalImg}
//                 showModal={showModal}
//                 toggleModal={toggleModal}
//               />
//             ))}
//         </ul>
//         {searchResult.length >= 12 && <Button onClick={onLoadMore} />}
//       </>
//     );
// }

// ImageGallery.propTypes = {
//   id: PropTypes.number,
//   webformatURL: PropTypes.string,
//   tags: PropTypes.string,
//   largeImageURL: PropTypes.string,
//   modalImg: PropTypes.string,
//   showModal: PropTypes.bool,
//   toggleModal: PropTypes.func,
//   onLoadMore: PropTypes.func,
// };
