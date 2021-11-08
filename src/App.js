import { Route, Switch } from "react-router-dom";
// import { lazy, Suspence } from 'react';
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviePage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

// const HomePage = lazy(() =>
//   import('./pages/HomePage/HomePage' /* webpackChunkName: 'Home Page'*/)),
// const MoviesPage = lazy(() =>
//   import('./pages/MoviePage/MoviesPage' /*webpackChunkName: 'Movies Page'*/)),
// const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage' /* webpackChunkName: 'Movie Details Page'*/)),

function App() {
  return (
    <div className="App">
      <Navigation />
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
    </div>
  );
}

export default App;
