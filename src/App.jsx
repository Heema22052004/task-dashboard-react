import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Theme effect
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  // Add Task
  const addTask = (text) => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle Completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="app">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <h1>Interactive Task Dashboard</h1>

      <TaskInput addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />

      <p className="summary">
        Total Tasks: {tasks.length} | Completed: {tasks.filter(t => t.completed).length}
      </p>
    </div>
  );
}

export default App;