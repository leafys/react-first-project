import React from "react";
import styles from "./NavbarLink.module.scss";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ name, linking }) => {
  let path = linking;

  return (
    <div className={styles.nav__item}>
      <NavLink
        to={path}
        activeClassName={styles.active}
        className={styles.nav__item__link}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default NavbarLink;
