import styles from "./main.module.css";

const Main = ({ inputValue, messages,setMessages}) => {
 
  return (
    <div className={styles.main}>
      <ul className={styles.chatBox}>
        {messages.map((message, index) => (
          <li key={index} className={message.isUser ? styles.two : styles.one}>
            {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
