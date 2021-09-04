import React from "react";
import styles from "./MessagesD.module.scss";

const MessagesD = ({ message, image }) => {
  return (
    <div className={styles.dialogs__messages__message}>
      <img
        className={styles.dialogs__messages__message__img}
        src={image}
        alt="imageMsg"
      />
      {message}
    </div>
  );
};

export default MessagesD;
