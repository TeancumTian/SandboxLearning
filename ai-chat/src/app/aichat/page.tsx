// src/aichat/aichat.tsx
"use client";
import React, { useState } from "react";

interface Message {
  sender: string;
  text: string;
  reply?: string; // Add the 'reply' property to the Message interface
}

const AIChat = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [conversation, setConversation] = useState<Message[]>([]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage: Message = {
      sender: "User",
      text: userInput,
    };

    // Add user message to conversation
    setConversation([...conversation, userMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { reply } = await response.json();

      const botMessage: Message = {
        sender: "GPT-4",
        text: userInput,
        reply: reply, // Assign the 'reply' value to the botMessage
      };

      // Add GPT-4's response to conversation
      setConversation((convo) => [...convo, botMessage]);
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Handle the error state appropriately
    }

    // Clear input field
    setUserInput("");
  };

  return (
    <div>
      <h1>Chat with AI</h1>
      <div className="conversation">
        {conversation.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
            <strong>GPT-4:</strong> {msg.reply}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default AIChat;
