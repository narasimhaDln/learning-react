function ToDoList() {
  const [task, setTask] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  // Add to the list;
  let addTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  // Toggle task completion;
  let toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) => {
      if (i === index) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  // Delete task from list;
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do-List</h1>
      <input
        onChange={(e) => setTask(e.target.value)}
        type="text"
        value={task}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => {
          return (
            <li key={index}>
              <span
                onClick={() => toggleTaskCompletion(index)}
                style={{
                  textDecoration: t.completed ? "line-through" : "none",
                }}
              >
                {t.text}
              </span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <ToDoList />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
