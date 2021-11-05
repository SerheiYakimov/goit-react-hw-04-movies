import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        HomePage
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        MoviesPage
      </NavLink>
    </nav>
  );
};

export default Navigation;
