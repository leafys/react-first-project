import React from "react";
import Friends from "./Friends/Friends";
import styles from "./Navbar.module.scss";
import NavbarLink from "./NavbarLink/NavbarLink";

const Nav = ({ state }) => {
  let navElements = state.navData.map((info) => (
    <NavbarLink
      id={info.id}
      key={info.id}
      name={info.name}
      linking={info.linking}
    />
  ));

  let friendsElements = state.friendsData.map((el) => (
    <Friends id={el.id} key={el.id} image={el.image} name={el.name} />
  ));

  return (
    <nav className={styles.nav}>
      <div>{navElements}</div>

      <div>
        <h2 className={styles.nav__friends__title}>Friends</h2>
        <div className={styles.nav__friends}>{friendsElements}</div>
      </div>
    </nav>
  );
};

export default Nav;
