// App.jsx
import { useContext } from "react";
import { AuthContext } from "../Q4/AuthContext";
// import { AuthContext } from "./AuthContext";
// import { ThemeContext } from "./ThemeContext";
import { ThemeContext } from "../Q4/ThemeContext";
function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navStyle = {
    padding: "1rem",
    backgroundColor: theme === "light" ? "#f7fafc" : "#2d3748",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: theme === "light" ? "#3182ce" : "#edf2f7",
    color: theme === "light" ? "#fff" : "#1a202c",
    border: "none",
    borderRadius: "0.375rem",
    cursor: "pointer",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
    padding: "1rem",
  };

  const cardStyle = {
    padding: "1rem",
    backgroundColor: "#e2e8f0",
    borderRadius: "0.375rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const footerStyle = {
    padding: "1rem",
    backgroundColor: "#edf2f7",
    textAlign: "center",
  };

  return (
    <div>
      <nav style={navStyle}>
        <button onClick={toggleAuth} style={buttonStyle}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
        <button onClick={toggleTheme} style={buttonStyle}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </nav>
      <div style={gridStyle}>
        {["Card 1", "Card 2", "Card 3"].map((card) => (
          <div key={card} style={cardStyle}>
            {card}
          </div>
        ))}
      </div>
      <footer style={footerStyle}>Footer Content</footer>
    </div>
  );
}

export default App;
