import React from "react";
import styles from "./Navbar.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={"nav__item"}>
        <a href="/" className={styles.nav__item__link}>
          Profile
        </a>
      </div>
      <div className="nav__item">
        <a href="/" className={styles.nav__item__link}>
          Massages
        </a>
      </div>
      <div className="nav__item">
        <a href="/" className={styles.nav__item__link}>
          News
        </a>
      </div>
      <div className="nav__item">
        <a href="/" className={styles.nav__item__link}>
          Music
        </a>
      </div>
      <div className="nav__item">
        <a href="/" className={styles.nav__item__link}>
          Setings
        </a>
      </div>
    </nav>
  );
};

export default Nav;
