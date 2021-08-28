import React from "react";
import styles from "./MessagesD.module.scss";

const MessagesD = (props) => {
  return (
    <div className={styles.dialogs__messages__message}>{props.message}</div>
  );
};

export default MessagesD;
