function Counter() {
  const [message, setMessage] = React.useState(false);

  function display() {
    setMessage(!message);
  }
  return (
    <>
      <h1>{message ? "Hello, welcome to React state management" : ""}</h1>
      <button onClick={display}>{message ? "Hide" : "show"}</button>
    </>
  );
}

function App() {
  return <Counter />;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
