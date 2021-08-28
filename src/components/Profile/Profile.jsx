import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./myPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import ProfileBg from "./ProfileBg/ProfileBg";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileBg />

      <Profileinfo />

      <MyPosts />
    </div>
  );
};

export default Profile;
