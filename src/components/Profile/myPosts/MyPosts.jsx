import React from "react";
import Fasting from "./Fasting/Fasting";

const MyPosts = () => {
  return (
    <div>
      <div className="profile__posts">
        My post
        <div className="profile__posts__newPost">
          <textarea
            className="profile__posts__newPost__area"
            name="message"
            id="message"
            cols="30"
            rows="2"
          ></textarea>
          <button className="profile__posts__newPost__btn">Add Post</button>
        </div>
        <div className="profile__posts__blocks">
          <Fasting likesCount="0" message="Post 1" />
          <Fasting likesCount="20" message="Post 2" />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
