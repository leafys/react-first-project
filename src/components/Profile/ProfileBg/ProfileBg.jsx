import React from "react";
import styles from "./ProfileBg.module.scss";

const ProfileBg = () => {
  return (
    <div className={styles.profile__image}>
      <img
        className={styles.profile__image__imgBg}
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="картинка"
      />
    </div>
  );
};

export default ProfileBg;
