import { useState, ChangeEvent, FormEvent } from "react";
import { Task } from "./Task";
import { PlusCircle } from "phosphor-react";

import styles from "./TaskArea.module.css";
import { HaveNoTask } from "./HaveNoTask";

export function TaskArea() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [taskStates, setTaskStates] = useState<boolean[]>([]);

  let totalTasks = tasks.length;
  let completedTasks = taskStates.filter((state) => state).length;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setTaskStates([...taskStates, false]); // Initially, all tasks are not completed
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    const contentTask = event.target.value;
    setNewTask(contentTask);
  }

  function deleteTask(index: number) {
    const tasksWithoutDeleteOne = tasks.filter((task, i) => i !== index);

    const updatedTaskStates = [...taskStates];
    updatedTaskStates.splice(index, 1);

    setTasks(tasksWithoutDeleteOne);
    setTaskStates(updatedTaskStates);
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function handleTaskToggle(index: number) {
    const updatedTaskStates = [...taskStates];
    updatedTaskStates[index] = !updatedTaskStates[index];
    setTaskStates(updatedTaskStates);
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <div className={styles.taskArea}>
      <form onSubmit={handleCreateNewTask} className={styles.addTask}>
        <input
          name="contentTask"
          className={styles.input}
          type="text"
          value={newTask}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button
          type="submit"
          className={styles.button}
          disabled={isNewTaskEmpty}
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
      <div className={styles.header}>
        <p>
          Tarefas criadas<span>{totalTasks}</span>
        </p>
        <p>
          Concluídas
          <span>
            {completedTasks} de {totalTasks}
          </span>
        </p>
      </div>
      {totalTasks === 0 ? <HaveNoTask /> : null}
      {tasks.map((task, index) => (
        <Task
          key={task}
          content={task}
          isCompleted={taskStates[index]}
          onToggle={() => handleTaskToggle(index)}
          onDeleteTask={() => deleteTask(index)}
        />
      ))}
    </div>
  );
}
