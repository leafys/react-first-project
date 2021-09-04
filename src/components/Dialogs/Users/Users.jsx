import React from "react";
import styles from "./Users.module.scss";
import { NavLink } from "react-router-dom";

const Users = ({ id, name, image }) => {
  let path = "/dialogs/" + id;

  return (
    <div className={styles.dialogs__items__item}>
      <img
        className={styles.dialogs__items__item__img}
        src={image}
        alt="imageUser"
      />
      <NavLink
        className={styles.dialogs__items__item__link}
        activeClassName={styles.active}
        to={path}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default Users;
