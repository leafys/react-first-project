import React from "react";
import styles from "./Dialogs.module.scss";
import Users from "./Users/Users";
import MessagesD from "./MessagesD/MessagesD";

const Dialogs = ({ state }) => {
  let dialogsElements = state.dialogsData.map((dialog) => (
    <Users
      id={dialog.id}
      key={dialog.id}
      image={dialog.image}
      name={dialog.name}
    />
  ));

  let messagesElements = state.messagesData.map((message) => (
    <MessagesD
      key={message.id}
      image={message.image}
      message={message.message}
    />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>{dialogsElements}</div>

      <div className={styles.dialogs__messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
