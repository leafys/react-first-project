import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img
        className={styles.profile__img}
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="картинка"
      />

      <div>
        <img
          className={styles["profile__avatar-img"]}
          src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
          alt="картинка"
        />
      </div>

      <MyPosts />
    </div>
  );
};

export default Profile;
