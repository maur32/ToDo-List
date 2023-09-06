import {CheckCircle, Circle, Trash} from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  id: string;
  isChecked: boolean;
  onDeleteTask: (id: string) => void;
  onHandleCheck: (id: string) => void;
}

function Task({
  content,
  id,
  isChecked,
  onDeleteTask,
  onHandleCheck,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCheck() {
    onHandleCheck(id);
  }

  return (
    <div className={styles.task}>
      {isChecked ? (
        <CheckCircle
          size={24}
          weight="fill"
          color="#4EA8DE"
          onClick={handleCheck}
        />
      ) : (
        <Circle size={24} color="#4EA8DE" onClick={handleCheck} />
      )}
      <label className={isChecked ? styles.checked : ""}>{content}</label>
      <button onClick={handleDeleteTask} title="Deletar Task">
        <Trash color="#808080" />
      </button>
    </div>
  );
}

export default Task;
