import {PlusCircle} from "@phosphor-icons/react";
import styles from "./NewTask.module.css";

function NewTask() {
  return (
    <div className={styles.newTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
      />
      <button className={styles.createButton}>
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  );
}

export default NewTask;
