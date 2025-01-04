let Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        width: "200px",
        backgroundColor: "blue",
      }}
    >
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

function App() {
  return (
    <>
      <Counter />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
