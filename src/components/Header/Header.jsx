import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__img}
        src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"
        alt="картинка"
      />
    </header>
  );
};

export default Header;
