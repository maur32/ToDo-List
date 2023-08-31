import Task from "./Task";
import styles from "./Tasks.module.css";

function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <p className={styles.created}>
          Tarefas criadas
          <div className={styles.counter}>5</div>
        </p>
        <p className={styles.done}>
          Concluídas
          <div className={styles.counter}>2 de 5</div>
        </p>
      </div>
      <div className={styles.list}>
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}

export default Tasks;
