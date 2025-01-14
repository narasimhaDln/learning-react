import { useState } from "react";
import { createContext } from "react";
export const ContextTheme = createContext();
function ThemeContext({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ContextTheme.Provider value={{ theme, toggleTheme }}>
      {children}
    </ContextTheme.Provider>
  );
}

export default ThemeContext;
