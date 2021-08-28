import React from "react";
import Fasting from "./Fasting/Fasting";
import styles from "./MyPosts.module.scss";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Привет привет!!!", likesCount: 12 },
    { id: 2, message: "Hello man!", likesCount: 13 },
  ];

  let postElements = postData.map((post) => (
    <Fasting likesCount={post.likesCount} message={post.message} />
  ));

  return (
    <div>
      <div className={styles.profile__posts}>
        <h3 className={styles.profile__posts__title}>My post</h3>
        <div className={styles.profile__posts__newPosts}>
          <div className={styles.profile__posts__newPosts__textArea}>
            <textarea
              className={styles.profile__posts__newPosts__textArea__area}
              name="message"
              id="message"
              T
              cols="30"
              rows="2"
            ></textarea>
          </div>
          <div className={styles.profile__posts__newPosts__btnPost}>
            <button className={styles.profile__posts__newPosts__btnPost__btn}>
              Add Post
            </button>
          </div>
        </div>
        <div className={styles.profile__posts__blocks}>
          {postElements}

          {/* <Fasting
            likesCount={postData[0].likesCount}
            message={postData[0].message}
          />
          <Fasting
            likesCount={postData[1].likesCount}
            message={postData[1].message}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
