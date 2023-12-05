import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.css";

export function Form({onFormSubmit}) {
  const [task, setTask] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(task);
      }}
      className={styles.form}
    >
      <input
        placeholder="wpisz zadanie..."
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        className={styles.input}
        type="text"
      />
      <Button disabled={!task}>Dodaj</Button>
    </form>
  );
}
