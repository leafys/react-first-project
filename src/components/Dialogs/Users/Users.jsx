import React from "react";
import styles from "./Users.module.scss";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={styles.dialogs__items__item}>
      <NavLink
        className={styles.dialogs__items__item__link}
        activeClassName={styles.active}
        to={path}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default Users;
