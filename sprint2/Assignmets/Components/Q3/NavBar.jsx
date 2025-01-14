import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Navbar() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  return (
    <nav>
      <h2>NavBar</h2>
      <button onClick={toggleAuth}>
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </nav>
  );
}
export default Navbar;
