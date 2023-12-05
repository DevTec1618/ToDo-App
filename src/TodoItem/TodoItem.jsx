import { Button } from "../components/Button/Button";
import styles from "./TodoItem.module.css";

export function TodoItem({ children, done, onClickDone, onRemoveItem }) {
  return (
    <li className={styles.todoItem}>
      <p className={done ? styles.lineThrough : ""}>{children}</p>
      <div>
        {!done && <Button onClick={() => onClickDone()}>Zrobione</Button>}
        {<Button onClick={() => onRemoveItem()}>Usuń</Button>}
      </div>
    </li>
  );
}
