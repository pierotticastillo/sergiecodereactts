import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [listTask, setlistTask] = useState<string[]>([]);
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setlistTask((beforeTasks) => [...beforeTasks, newTask]);
    setNewTask("");
  };
  const handleDeleteTask = (index: number) => {
    setlistTask((beforeTasks) => beforeTasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input
          type="text"
          placeholder="Agregar tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div className="button-container">
          <button onClick={handleAddTask}>Agregar tarea</button>
        </div>
      </div>
      <ListaTareas
        listTask={listTask}
        deleteTask={handleDeleteTask}
      ></ListaTareas>
    </div>
  );
};
