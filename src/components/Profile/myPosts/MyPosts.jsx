import React from "react";
import Fasting from "./Fasting/Fasting";
import styles from "./MyPosts.module.scss";

const MyPosts = ({ state }) => {
  let postElements = state.postData.map((post) => (
    <Fasting
      key={post.id}
      likesCount={post.likesCount}
      message={post.message}
    />
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
        <div className={styles.profile__posts__blocks}>{postElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
