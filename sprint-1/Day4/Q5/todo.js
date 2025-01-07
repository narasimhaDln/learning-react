// Fetch Users - GET request
const FetchData = ({ setData }) => {
  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Data not found", error));
  }, [setData]);

  return <div>Loading data...</div>;
};

// Add User - POST request
const AddUser = ({ setData }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const addUser = () => {
    if (name.trim() === "" || email.trim() === "") {
      alert("Name and Email cannot be empty");
      return;
    }

    // Validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    const newUser = { name, email };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => {
        setData((prevData) => [...prevData, response.data]);
        setName("");
        setEmail("");
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  return (
    <div>
      <h2>Add New User</h2>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Enter name"
      />
      <br />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter email"
      />
      <br />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

// Update User - PATCH request
const UpdateUser = ({ data, setData, selectUserid, setSelectUserid }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const updateUser = () => {
    if (name.trim() === "" || email.trim() === "") {
      alert("Name and Email cannot be empty");
      return;
    }

    const updatedUser = { name, email };

    axios
      .patch(
        `https://jsonplaceholder.typicode.com/users/${selectUserid}`,
        updatedUser
      )
      .then((response) => {
        setData(
          data.map((user) =>
            user.id === selectUserid ? { ...user, ...response.data } : user
          )
        );
        setName("");
        setEmail("");
        setSelectUserid(null);
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  React.useEffect(() => {
    if (selectUserid) {
      const user = data.find((user) => user.id === selectUserid);
      if (user) {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [selectUserid, data]);

  return (
    <div>
      <h2>{selectUserid ? "Edit User" : "Select a User to Edit"}</h2>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Enter name"
      />
      <br />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter email"
      />
      <br />
      {selectUserid ? (
        <button onClick={updateUser}>Update User</button>
      ) : (
        <p>Select a user to edit.</p>
      )}
    </div>
  );
};

// Delete User - DELETE request
const DeleteUser = ({ id, setData }) => {
  const deleteUser = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        // Removing the deleted user from the local state
        setData((prevData) => prevData.filter((user) => user.id !== id));
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return <button onClick={deleteUser}>Delete User</button>;
};

// User Management
const UserManagement = () => {
  const [data, setData] = React.useState([]);
  const [selectUserid, setSelectUserid] = React.useState(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <div>
      <h1>User Management</h1>
      <FetchData setData={setData} />
      <AddUser setData={setData} />
      <UpdateUser
        data={data}
        setData={setData}
        selectUserid={selectUserid}
        setSelectUserid={setSelectUserid}
      />

      <h2>Existing Users</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            Name: {user.name}
            <br />
            Email: {user.email}
            <br />
            <button
              onClick={() => {
                setName(user.name);
                setEmail(user.email);
                setSelectUserid(user.id);
              }}
            >
              Edit
            </button>
            <DeleteUser id={user.id} setData={setData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <>
      <UserManagement />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
