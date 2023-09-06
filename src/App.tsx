import "./global.css";
import styles from "./App.module.css";

import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";

import {v4 as uuidv4} from "uuid";
import {useState} from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      id: uuidv4(),
      isChecked: false,
    },
    {
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vels sed fames integer.",
      id: uuidv4(),
      isChecked: false,
    },
  ]);

  const [taskText, setNewTaskText] = useState("");

  function deleteTask(idTaskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(
      (task) => task.id !== idTaskToDelete
    );

    setTasks(tasksWithoutDeletedOne);
  }

  function createTask() {
    const newTask = {content: taskText, id: uuidv4(), isChecked: false};
    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  function textChange(text: string) {
    setNewTaskText(text);
  }

  function check(idToCheck: string) {
    const updatedTasks = [...tasks];

    const index = updatedTasks.findIndex((task) => task.id === idToCheck);

    if (index !== -1) {
      updatedTasks[index].isChecked = !updatedTasks[index].isChecked;

      setTasks(updatedTasks);
    }
  }

  const isTaskEmpty = taskText.length === 0;
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask
          onCreateTask={createTask}
          onTextChange={textChange}
          textValue={taskText}
          isTaskEmpty={isTaskEmpty}
        />
        <Tasks tasks={tasks} deleteTask={deleteTask} check={check} />
      </div>
    </>
  );
}

export default App;
