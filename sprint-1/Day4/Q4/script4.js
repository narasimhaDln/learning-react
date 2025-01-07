function TaskList() {
  const [tasks, setTasks] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const fetchData = () => {
    axios("https://your-firebase-db.firebaseio.com/tasks.json")
      .then((response) => {
        if (response.data) {
          const taskArray = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }));
          setTasks(taskArray);
          setLoading(false);
        } else {
          setError("No tasks found.");
          setLoading(false);
        }
      })
      .catch((error) => {
        setError("Error fetching tasks: " + error.message);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Task List</h1>
      {loading && <p>Loading tasks...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <TaskList />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
