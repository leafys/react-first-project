import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./myPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import ProfileBg from "./ProfileBg/ProfileBg";

const Profile = ({ state }) => {
  return (
    <div className={styles.profile}>
      <ProfileBg />

      <Profileinfo />

      <MyPosts state={state} />
    </div>
  );
};

export default Profile;
