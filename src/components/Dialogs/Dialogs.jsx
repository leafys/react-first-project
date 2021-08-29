import React from "react";
import styles from "./Dialogs.module.scss";
import Users from "./Users/Users";
import MessagesD from "./MessagesD/MessagesD";

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Сережа" },
    { id: 2, name: "Артем" },
    { id: 3, name: "Дима" },
    { id: 4, name: "Жека" },
    { id: 5, name: "Игорь" },
    { id: 6, name: "Вова" },
  ];

  let messagesData = [
    { id: 1, message: "Привет привет!!!" },
    { id: 2, message: "Hello man!" },
    { id: 3, message: "Dota 2 play" },
    { id: 4, message: "Hochu eating" },
    { id: 5, message: "HELLLPP man???" },
    { id: 6, message: "WHAT ARE YOU DOING!!!" },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <Users key={dialog.id} name={dialog.name} />
  ));

  let messagesElements = messagesData.map((message) => (
    <MessagesD key={message.id} message={message.message} />
  ));

  // [
  //   <Users id={dialogsData[0].id} name={dialogsData[0].name} />,
  //   <Users id={dialogsData[1].id} name={dialogsData[1].name} />,
  //   <Users id={dialogsData[2].id} name={dialogsData[2].name} />,
  //   <Users id={dialogsData[3].id} name={dialogsData[3].name} />,
  //   <Users id={dialogsData[4].id} name={dialogsData[4].name} />,
  //   <Users id={dialogsData[5].id} name={dialogsData[5].name} />,
  // ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        {dialogsElements}

        {/* <Users id={dialogsData[0].id} name={dialogsData[0].name} />
        <Users id={dialogsData[1].id} name={dialogsData[1].name} />
        <Users id={dialogsData[2].id} name={dialogsData[2].name} />
        <Users id={dialogsData[3].id} name={dialogsData[3].name} />
        <Users id={dialogsData[4].id} name={dialogsData[4].name} />
        <Users id={dialogsData[5].id} name={dialogsData[5].name} /> */}
      </div>

      <div className={styles.dialogs__messages}>
        {messagesElements}

        {/* <MessagesD message={messagesData[0].message} />
        <MessagesD message={messagesData[1].message} />
        <MessagesD message={messagesData[2].message} />
        <MessagesD message={messagesData[3].message} />
        <MessagesD message={messagesData[4].message} />
        <MessagesD message={messagesData[5].message} /> */}
      </div>
    </div>
  );
};

export default Dialogs;
