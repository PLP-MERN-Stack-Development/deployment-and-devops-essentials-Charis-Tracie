import { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${api}/api/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTask = async () => {
    if (!newTask) return;
    await axios.post(`${api}/api/tasks`, { title: newTask });
    setNewTask("");
    fetchTasks();
  };

  const toggleTask = async (id, completed) => {
    await axios.put(`${api}/api/tasks/${id}`, { completed: !completed });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${api}/api/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>MERN Week 7 Task App</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={addTask}>Add Task</button>
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
