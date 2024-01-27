// pages/chat-with-gpt-4.js

import React, { useState } from "react";

const ChatWithGPT4 = () => {
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState([]);

  const sendMessage = async () => {
    if (!userInput) return;

    const userMessage = {
      sender: "User",
      text: userInput,
    };

    // Add the user's message to the conversation
    setConversation([...conversation, userMessage]);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    });

    const { reply } = await response.json();

    const botMessage = {
      sender: "GPT-4",
      text: reply,
    };

    // Add GPT-4's response to the conversation
    setConversation((convo) => [...convo, botMessage]);

    // Clear the input field
    setUserInput("");
  };

  return (
    <div>
      <h1>Chat with GPT-4</h1>
      <div>
        {conversation.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatWithGPT4;
