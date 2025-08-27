import styles from "./Chat.module.css";
import Markdown from "react-markdown";

const WELCOME_MESSAGE = {
  role: "assistant",
  content: "Hello! How can I assist in Booking of Smart Bike and Scooter?",
};

export function Chat({ messages }) {
  // Ensure welcome message is always first
  const chatMessages =
    messages.length > 0 && messages[0].content === WELCOME_MESSAGE.content
      ? messages
      : [WELCOME_MESSAGE, ...messages];

  return (
    <div className={styles.Chat} aria-label="Chat messages">
      {chatMessages.map(({ role, content }, index) => (
        <div
          key={`${role}-${index}`}
          className={`${styles.Message} ${styles[role] || ""}`}
          data-role={role}
        >
          <Markdown>{content}</Markdown>
        </div>
      ))}
    </div>
  );
}
