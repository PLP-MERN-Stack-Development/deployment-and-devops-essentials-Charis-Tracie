export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map(task => (
        <li key={task._id} style={{ margin: "10px 0" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task._id, task.completed)}
          />
          <span style={{ marginLeft: "10px", textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button onClick={() => deleteTask(task._id)} style={{ marginLeft: "10px" }}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
