// // function App() {
// //   const [formData, setFormData] = React.useState({
// //     username: "",
// //     email: "",
// //   });
// //   const [isSubmitted, setIsSubmitted] = React.useState(false);
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setIsSubmitted(true);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         name="username"
// //         type="text"
// //         placeholder="enter username"
// //         onChange={handleChange}
// //       />
// //       <input
// //         name="email"
// //         type="email"
// //         placeholder="enter email"
// //         onChange={handleChange}
// //       />
// //       {isSubmitted && <h1>{formData.username}</h1>}
// //       <input value="submit" type="submit" />
// //     </form>
// //   );
// // }
// // ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// function App() {
//   const [formData, setFormData] = React.useState({
//     username: "",
//     email: "",
//     phone: "",
//   });
//   const [users, setUsers] = React.useState([]);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFetchData = async () => {
//     const res = await axios.get(
//       "https://lms-project-e36ba-default-rtdb.firebaseio.com/users.json"
//     );
//     const out = Object.entries(res.data);
//     setUsers(out);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const postData = {
//       username: formData.username,
//       email: formData.email,
//       phone: formData.phone,
//     };
//     const res = axios.post(
//       "https://lms-project-e36ba-default-rtdb.firebaseio.com/users.json",
//       postData
//     );
//     console.log(res);
//     setFormData({
//       username: "",
//       email: "",
//       phone: "",
//     });
//   };
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(
//         `https://lms-project-e36ba-default-rtdb.firebaseio.com/users${id}.json`
//       );
//       const updatedList = users.filter((user) => users[id] !== id);
//       setUsers(updatedList);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           // placeholder="enter username"
//           name="username"
//           onChange={handleChange}
//           value={formData.username}
//         />
//         <input
//           type="email"
//           placeholder="enter email"
//           name="email"
//           onChange={handleChange}
//           value={formData.email}
//         />
//         <input
//           type="number"
//           placeholder="enter Phone number"
//           name="phone"
//           onChange={handleChange}
//           value={formData.phone}
//         />
//         <input type="submit" />
//       </form>
//       <button onClick={handleFetchData} style={{ marginTop: "20px" }}>
//         FetchData
//       </button>
//       <div className="container">
//         {users.map((elem) => (
//           <DisplayData data={elem} />
//         ))}
//       </div>
//     </>
//   );
// }

// function DisplayData(props) {
//   console.log(props, "props");
//   return (
//     <>
//       <div className="card">
//         <h3>{props.data[1].username}</h3>
//         <h3>{props.data[1].email}</h3>
//         <h3>{props.data[1].phone}</h3>
//         <button onClick={() => handleDelete(id)}>Delete</button>
//       </div>
//     </>
//   );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
function FetchData() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchUser = async () => {
    setLoading(true);
    const res = await axios.get("https://reqres.in/api/users?page=2");
    setData(res.data.data);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={fetchUser}>Fetch users</button>
      {loading
        ? "Loading...."
        : data.map((user, id) => (
            <div key={user.id}>
              <p>{user.first_name}</p>
              <img src={user.avatar} />
            </div>
          ))}
    </div>
  );
}
function App() {
  return <FetchData />;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
