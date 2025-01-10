// import { useState, useEffect } from "react";

// // import { firestore } from "../firebase-token-generator";

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const snapshot = await firestore.collection("tasks").get();
//       setTasks(snapshot.docs.map((doc) => doc.data())); // Update state with the fetched tasks
//     };
//     fetchTasks(); // Call fetchTasks to retrieve tasks from Firestore
//   }, []); // Empty dependency array ensures this runs only once when the component mounts

//   return (
//     <div>
//       <h1>Tasks</h1>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task.name}</li> // Renders each task from the 'tasks' state
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default TaskList;
