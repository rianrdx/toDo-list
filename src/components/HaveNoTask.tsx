import styles from "./HaveNoTask.module.css";

import clipboard from "../assets/clipboard.svg";

export function HaveNoTask() {
  return (
    <div className={styles.haveNoTasks}>
      <img src={clipboard} alt="clipboard" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
