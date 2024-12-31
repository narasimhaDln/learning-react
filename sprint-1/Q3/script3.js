function UpDateTItle() {
  const [title, setTitle] = React.useState("welcome to vannilla javascript");
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>Title:{title}</h1>
      <button onClick={() => setTitle("Welcome to react application")}>
        TextChange
      </button>
      <p>RenderTheHowMany:{count}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<UpDateTItle />);
