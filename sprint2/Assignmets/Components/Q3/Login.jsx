import { AuthContext } from "./AuthContext";
import { useContext } from "react";
function Login() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div>
      <h1>
        {isAuthenticated ? "You are logged in!" : "please log in to continue"}
      </h1>
    </div>
  );
}

export default Login;
