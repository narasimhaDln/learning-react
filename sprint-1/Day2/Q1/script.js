function App() {
  const [color, setButtonColor] = React.useState("blue");

  const handleColor = () => {
    setButtonColor(color === "blue" ? "red" : "blue");
  };

  return (
    <button 
      style={{ backgroundColor: color }} 
      onClick={handleColor}
    >
      Login
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
