import { Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Loader from "react-loader-spinner";

// import HomePage from "./pages/HomePage/HomePage";
// import MoviesPage from "./pages/MoviePage/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import NotFoundPage from "./pages/NotFoundPage";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: 'Home Page'*/)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviePage/MoviesPage" /*webpackChunkName: 'Movies Page'*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: 'Movie Details Page'*/
  )
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage" /*webpackChunkName: 'Not Found Page' */)
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense
        fallback={
          <Loader
            type="Bars"
            color="#00BFFF"
            height={200}
            width={200}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/notFound">
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
