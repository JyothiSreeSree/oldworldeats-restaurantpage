import React, { useState } from "react";
import "./ChatBox.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessages = [
      ...messages,
      { text: inputText, type: "user" },
      { text: "Typing...", type: "typing" },
    ];
    setMessages(newMessages);
    setInputText("");

    // Simulate chatbot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), // Remove "Typing..."
        { text: "This is a sample response from the chatbot.", type: "chatbot" },
      ]);
    }, 1500);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message-container ${msg.type}`}>
            <div className={`message ${msg.type}-message`}>{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="send-button" onClick={sendMessage}>
          &#9658;
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
