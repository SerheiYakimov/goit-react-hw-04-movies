import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviePage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
