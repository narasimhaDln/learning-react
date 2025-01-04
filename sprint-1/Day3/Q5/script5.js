const TaskManager = () => {
  const [tasks, setTasks] = React.useState([]);
  const [filterPriority, setFilterPriority] = React.useState("All");
  const [filterStatus, setFilterStatus] = React.useState("All");
  const [taskInput, setTaskInput] = React.useState("");
  const [priority, setPriority] = React.useState("Medium");
  //function add new task;
  const addTask = () => {
    if (!taskInput.trim()) return;
    const newTask = {
      id: Date.now(),
      title: taskInput.trim(),
      priority,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask].sort(sortByPriority));
    setTaskInput("");
    setPriority("");
  };
  //function to mark task as complete/incomplete;
  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  //function to delete a task;
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  //function to sort tasks by priority
  const sortByPriority = (a, b) => {
    const priorities = { High: 1, Medium: 2, Low: 3 };
  };
  //filter tasks based on priority;
  const filteredTasks = tasks.filter((task) => {
    const priorityMatch =
      filterPriority === "All" || task.priority === filterPriority;
    const statusMatch =
      filterStatus === "All" ||
      (filterStatus === "Completed" && task.completed) ||
      (filterStatus === "Incomplete" && !task.completed);
    return priorityMatch && statusMatch;
  });
  return (
    <div>
      <h2>Advance task manager</h2>
      <div>
        <input
          type="text"
          placeholder="enter the task name"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={addTask}>AddTask</button>
      </div>
      {/* filter section */}
      <div>
        <label>
          Filter by Priority:
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label>
          Filter by Status:
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </label>
      </div>
      {/* task list */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span>
              <strong>{task.title}</strong>({task.priority})-{""}
              {task.completed ? "Completed" : "Incomplete"}
            </span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? "Mask Incomplete" : "Mask Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {filteredTasks.length === 0 && <p>No tasks to display.</p>}
    </div>
  );
};

function App() {
  return (
    <>
      <TaskManager />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
