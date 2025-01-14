import { Route, Routes } from "react-router-dom";
import People from "./Routing/People";
import UserDetails from "./Routing/UserDetails";
import "./App.css"

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/users/:id" element={<UserDetails />} /> 
      </Routes>
   
  );
}

export default App;

