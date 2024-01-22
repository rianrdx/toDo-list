import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  isCompleted: boolean;
  onToggle: () => void;
  onDeleteTask: (content: string) => void;
}

export function Task({
  content,
  isCompleted,
  onToggle,
  onDeleteTask,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleToggle() {
    onToggle();
  }

  return (
    <fieldset className={styles.task}>
      <input
        type="checkbox"
        id={`task-${content}`}
        checked={isCompleted}
        onChange={handleToggle}
      />

      <label htmlFor={`task-${content}`}>
        <p>{content}</p>
      </label>

      <button onClick={handleDeleteTask} title="Deletar task">
        <Trash size={18} />
      </button>
    </fieldset>
  );
}
