import React from "react";
import styles from "./Profileinfo.module.scss";

const Profileinfo = () => {
  return (
    <div className={styles.profile__userImage}>
      <img
        className={styles.profile__userImage__img}
        src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
        alt="картинка"
      />
    </div>
  );
};

export default Profileinfo;
