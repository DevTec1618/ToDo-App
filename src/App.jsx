import { useState } from "react";
import styles from "./App.module.css";
import { TodoItem } from "./TodoItem/TodoItem";
import { Form } from "./components/Form/Form";
import { printNumberOfTasks } from "./utils/printNumberOfTasks";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [tasks, setTasks] = useState([
    { name: "Zapłacić rachunki", done: false },
    { name: "Wynieść śmieci", done: true },
  ]);

  function handleOnFormSubmit(task) {
    setTasks((prevTasks) => [...prevTasks, { name: task, done: false }]);
    setIsFormShown(false);
  }

  function handleClickDone(name) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.name !== name) {
          return task;
        }
        return { ...task, done: true };
      })
    );
  }

  function handleRemoveItem(name) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.name !== name)
    );
  }

  return (
    <div className={styles.todoCard}>
      <header className={styles.cardHeader}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{printNumberOfTasks(tasks.length)}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => {
              setIsFormShown(true);
            }}
            className={styles.addBtn}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form
          onFormSubmit={(data) => {
            handleOnFormSubmit(data);
          }}
        />
      )}
      <main>
        <ul>
          {tasks.map(({ name, done }) => (
            <TodoItem
              onClickDone={() => handleClickDone(name)} onRemoveItem={() => handleRemoveItem(name)}
              key={name} done={done}
            >
              {name}
            </TodoItem>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
