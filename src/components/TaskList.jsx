function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className="task">
          <span
            className={task.completed ? "completed" : ""}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </span>

          <button onClick={() => deleteTask(task.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;