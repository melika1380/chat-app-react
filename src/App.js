import React,{useRef,useState,useEffect}from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import styles from "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const socket = useRef(null);

  useEffect(() => {
    socket.current = new WebSocket("wss://ws.postman-echo.com/raw");

    const statueSocket = (event) => {
      console.log("connecting", event);
    };

    const messageSocket = (event) => {
      const newMessage = { isUser: false, text: event.data };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.current.addEventListener("open", statueSocket);
    socket.current.addEventListener("message", messageSocket);

    return () => {
      socket.current.removeEventListener("open", statueSocket);
      socket.current.removeEventListener("message", messageSocket);
      socket.current.close();
    };
  }, []);

  const sendMessage = () => {
    const newMessage = { isUser: true, text: userInput };
    socket.current.send(userInput);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserInput("");
  };

  return (
    <div>
      <Header />
      <Main messages={messages} />
      <Footer className={styles.footer} sendMessage={sendMessage} userInput={userInput} setUserInput={setUserInput} />
    </div>
  );
};

export default App;