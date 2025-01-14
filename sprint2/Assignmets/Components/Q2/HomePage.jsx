import { useTheme } from "./ThemeContext";

function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}

export default HomePage;
