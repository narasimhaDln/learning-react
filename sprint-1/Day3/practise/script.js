function ArrayExample() {
  let fruitsArr = ["Apple", "Mango"];
  const [fruits, setFruits] = React.useState(fruitsArr);
  function addFruits() {
    setFruits([...fruits, "banana"]);
  }
  return (
    <>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((elem, id) => (
          <li key={id}>{elem}</li>
        ))}
      </ul>
      <button onClick={addFruits}>Add Banana</button>
    </>
  );
}
function ObjectExample() {
  let details = { name: "Suraj", age: 22 };
  let [user, setUser] = React.useState(details);

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age by 1 Year
      </button>
    </>
  );
}
function Login() {
  const [login, setLogin] = React.useState(false);
  const toggleLogin = () => {
    setLogin(!login);
  };
  return (
    <>
      <h1>please login{login ? "welcome" : "pleaselogin"}</h1>
      <button onClick={toggleLogin}>{login ? "Login" : "Logout"}</button>
    </>
  );
}
function Todo() {
  const [tasks, setTasks] = React.useState(["heelo", "veeresh", "DLN"]);
  const [newTask, setNewTask] = React.useState("");
  const [taskEdit, setTaskEdit] = React.useState("");
  const [editIndex, setIndex] = React.useState(null);
  const addUser = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const deleteUser = (index) => {
    const update = tasks.filter((ele, i) => i !== index);
    setTasks(update);
  };
  const startEdit = (index) => {
    setIndex(index);
    setNewTask(tasks[index]);
  };
  const handleEdit = (e) => {
    setTaskEdit(e.target.value);
  };
  return (
    <div>
      <input value={newTask} onChange={handleChange} type="text" />
      <button onClick={addUser}>Add</button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteUser(index)}>Delete</button>
            <button onClick={() => startEdit(index)}>Edit</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Counter() {
  const [name, setName] = React.useState("React");
  return (
    <>
      <Todo />
      <Login />
      <ObjectExample />
      <ArrayExample />
      <h1>Name:{name}</h1>
      <button onClick={() => setName("masai")}>Change</button>
    </>
  );
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Counter />);
