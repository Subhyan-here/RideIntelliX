import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Chat } from "./Chat/Chat";
import { Controls } from "./Controls/Controls";
import styles from "./Chat/Chat.module.css";
import { Loader } from "./Loader/Loader";

// ✅ Load API key securely
const API_KEY = 'AIzaSyBZaqKBTZTUds0ptmklR41mjS36PRIDIAU'; 
const googleai = new GoogleGenerativeAI(API_KEY);
const gemini = googleai.getGenerativeModel({ model: "gemini-2.0-flash" });

const Chatboat = () => {
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize chat on component mount
  useEffect(() => {
    async function initChat() {
      try {
        const newChat = gemini.startChat({ history: [] });
        setChat(newChat);
      } catch (error) {
        console.error("Error initializing chat:", error);
      }
    }
    initChat();
  }, []);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setIsLoading(true);

    if (!chat) {
      addMessage({
        content: "Chat service unavailable. Please try again later.",
        role: "system",
      });
      setIsLoading(false);
      return;
    }

    try {
      const result = await chat.sendMessage(content);

      console.log("API Response:", result); // Debugging

      // ✅ Extract text properly
      const responseText = result.response.text();

      addMessage({ content: responseText, role: "assistant" });
    } catch (error) {
      console.error("Error sending message:", error);
      addMessage({
        content: "Sorry, I couldn't process your request. Please try again!",
        role: "system",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.App}>
      {isLoading && <Loader />}
      <header className={styles.Header}>
        <h2 className={styles.Title}>AI Chatbot For Smart Bike and Scooter Rental System 
          (Powered by Gemini AI)</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls isDisabled={isLoading} onSend={handleContentSend} />
    </div>
  );
};

export default Chatboat;
