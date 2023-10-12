import React from "react";
import styles from "./Header.module.css";
import background from "../icon/download.png";
import iconMenu from "../icon/menu.png";

const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <img className={styles.profileImg} src={background} alt="icon" />
          <p className={styles.name}>User</p>
        </div>
        <div className={styles.file}>
          <span>
            <img className={styles.dot} src={iconMenu} alt="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
