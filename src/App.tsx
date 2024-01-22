import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskArea } from "./components/TaskArea";

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <TaskArea />
      </div>
    </div>
  );
}
