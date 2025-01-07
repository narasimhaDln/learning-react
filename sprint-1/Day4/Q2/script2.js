const UncontrolledInput = () => {
  const inputRef = React.useRef();

  const handleSubmit = () => alert(inputRef.current.value);

  return (
    <div>
      <label>
        UserName:
        <input type="text" ref={inputRef} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

function App() {
  return (
    <>
      <UncontrolledInput />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
