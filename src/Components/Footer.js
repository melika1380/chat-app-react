import React from "react";
import styles from "./Footer.module.css";
import icon from "../icon/icons8-send-32.png";

const Footer = ({ sendMessage, userInput, setUserInput }) => {
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const enterClick = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerBox}>
        <div className={styles.inputBox}>
          <input
            onChange={handleInputChange}
            className={styles.input}
            value={userInput}
            onKeyPress={enterClick}
            type="text"
            placeholder="Write a message"
            required
            autofocus
          />
          <button className={styles.button} onClick={sendMessage}>
            <img src={icon} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};


export default Footer;