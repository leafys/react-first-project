import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={"nav__item"}>
        <NavLink
          to="/profile"
          activeClassName={styles.active}
          className={styles.nav__item__link}
        >
          Profile
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink
          to="/dialogs"
          activeClassName={styles.active}
          className={styles.nav__item__link}
        >
          Massages
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink
          to="/news"
          activeClassName={styles.active}
          className={styles.nav__item__link}
        >
          News
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink
          to="/music"
          activeClassName={styles.active}
          className={styles.nav__item__link}
        >
          Music
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink
          to="/setings"
          activeClassName={styles.active}
          className={styles.nav__item__link}
        >
          Setings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
