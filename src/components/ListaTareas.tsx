type Props = {
  listTask: string[];
  deleteTask: (index: number) => void;
};

export const ListaTareas = ({ listTask, deleteTask }: Props) => {
  return (
    <div className="taskList">
      {listTask.map((task, index) => (
        <div key={index} className="task">
          {task}
          <button onClick={() => deleteTask(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};
