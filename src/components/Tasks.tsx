import Task from "./Task";

import styles from "./Tasks.module.css";

import clipboard from "../assets/clipboard.svg";

interface TasksProps {
  tasks: Tasks[];
  deleteTask: (id: string) => void;
  check: (id: string) => void;
}

interface Tasks {
  content: string;
  isChecked: boolean;
  id: string;
}

function Tasks({tasks, deleteTask, check}: TasksProps) {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <p className={styles.created}>
          Tarefas criadas
          <div className={styles.counter}>{tasks.length}</div>
        </p>
        <p className={styles.done}>
          Concluídas
          <div className={styles.counter}>
            {tasks.length > 0
              ? `${tasks.filter((task) => task.isChecked).length} de `
              : ""}
            {tasks.length}
          </div>
        </p>
      </div>
      <div className={styles.list}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              content={task.content}
              key={task.id}
              id={task.id}
              isChecked={task.isChecked}
              onDeleteTask={deleteTask}
              onHandleCheck={check}
            />
          ))
        ) : (
          <div className={styles.empty}>
            <img src={clipboard} alt="Clipboard" />
            <div className={styles.emptyText}>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tasks;
