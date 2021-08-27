import React from "react";
import styles from "./Fasting.module.scss";

const Fasting = (props) => {
  return (
    <div>
      <div className={styles.profile__posts__blocks__item}>
        <img
          className={styles.profile__posts__blocks__item__img}
          src="https://shapka-youtube.ru/wp-content/uploads/2020/04/leon.jpg"
          alt="img"
        />
        <span className={styles.profile__posts__blocks__item__text}>
          {props.message}
        </span>
        <div className={styles.profile__posts__blocks__item__rating}>
          <span className={styles.profile__posts__blocks__item__rating__like}>
            likes{" "}
            <span
              className={
                styles.profile__posts__blocks__item__rating__likesCount
              }
            >
              {props.likesCount}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fasting;
