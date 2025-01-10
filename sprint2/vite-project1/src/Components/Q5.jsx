import { useState } from "react";
import axios from "axios";
function TodoList() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        "https://todolist-4e559-default-rtdb.firebaseio.com/users.json"
      );
      const fetchedUser = [];
      for (let key in res.data) {
        fetchedUser.push({ id: key, ...res.data[key] });
      }
      setUser([...fetchedUser]);
    } catch (error) {
      console.log("error", error);
    }
  };
  async function addUser() {
    let newUser = { name, email };
    try {
      await axios.post(
        "https://todolist-4e559-default-rtdb.firebaseio.com/users.json",
        newUser
      );
      fetchUser();
      setName("");
      setEmail("");
    } catch (error) {
      console.log("error", error);
    }
  }
  async function deleteUser(id) {
    await axios.delete(
      `https://todolist-4e559-default-rtdb.firebaseio.com/users/${id}.json`
    );
    fetchUser();
  }
  function editUser(id) {
    const updateUser = user.find((use) => use.id === id);
    setName(updateUser.name);
    setEmail(updateUser.email);
  }

  return (
    <div>
      <input
        placeholder="enter the name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="enter email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>
      <ul>
        {user.map((todo, id) => (
          <li key={id}>
            {todo.name}
            <br></br>
            {todo.email}
            <button onClick={() => deleteUser(todo.id)}>Delete</button>
            <button onClick={() => editUser(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
      <button onClick={fetchUser}>FetchData</button>
    </div>
  );
}
export default TodoList;
