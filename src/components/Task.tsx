import {CheckCircle, Circle, Trash} from "@phosphor-icons/react";
import styles from "./Task.module.css";
import {useState} from "react";

function Task() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  }
  return (
    <div className={styles.task}>
      {isChecked ? (
        <CheckCircle
          size={24}
          weight="fill"
          onClick={handleCheck}
          color="#4EA8DE"
        />
      ) : (
        <Circle size={24} onClick={handleCheck} color="#4EA8DE" />
      )}
      <label className={isChecked ? styles.checked : ""}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </label>
      <Trash size={24} />
    </div>
  );
}

export default Task;
