import { useContext } from "react";
import { AuthContext } from "./AuthContext";
export default function Footer() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <footer>
      <h2>{isAuthenticated ? "welcome,User" : "please log in"}</h2>
    </footer>
  );
}
