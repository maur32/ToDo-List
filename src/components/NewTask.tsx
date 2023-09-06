import {PlusCircle} from "@phosphor-icons/react";
import styles from "./NewTask.module.css";
import {ChangeEvent} from "react";

interface NewTaskProps {
  onCreateTask: () => void;
  onTextChange: (value: string) => void;
  textValue: string;
  isTaskEmpty: boolean;
}

function NewTask({
  onCreateTask,
  onTextChange,
  textValue,
  isTaskEmpty,
}: NewTaskProps) {
  function handleCreateTask() {
    onCreateTask();
  }

  function handleTaskText(event: ChangeEvent<HTMLInputElement>) {
    onTextChange(event.target.value);
  }

  return (
    <div className={styles.newTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
        onChange={handleTaskText}
        value={textValue}
        required
      />
      <button
        className={styles.createButton}
        onClick={handleCreateTask}
        disabled={isTaskEmpty}
      >
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  );
}

export default NewTask;
