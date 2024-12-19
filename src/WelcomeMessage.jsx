import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "./store/todo-item-store";
const WelcomeMessage = () => {
  const { todoitem } = useContext(TodoItemsContext);
  return (
    todoitem.length === 0 && <p className={styles.welcome}>Enjoy your day...</p>
  );
};

export default WelcomeMessage;
