import React from "react";
import styles from "./Friends.module.scss";
import { NavLink } from "react-router-dom";

const Friends = ({ id, name, image }) => {
  let path = "/dialogs/" + id;
  return (
    <div className={styles.friends}>
      <div className={styles.friends__items}>
        <img className={styles.friends__items__img} src={image} alt="img" />
        <NavLink
          to={path}
          activeClassName={styles.active}
          className={styles.friends__items__link}
        >
          <span>{name}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Friends;
