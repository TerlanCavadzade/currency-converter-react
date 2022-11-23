import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import logo from "../images/logo.svg";

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src={logo} alt="logo of the bank" />
      </div>
      <div className={classes.links}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
          to="/convert"
        >
          Convert
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
          to="/"
        >
          Bank
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
          to="/businnes"
        >
          Businnes
        </NavLink>
      </div>
      <div className={classes.login}>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default MainNavigation;
