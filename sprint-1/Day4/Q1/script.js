let ControlledForm = () => {
  const [username, setUserName] = React.useState("");
  const [error, setError] = React.useState("");
  const [submittedUsername, setSubmittedUsername] = React.useState("");
  const handleForm = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("username cannot be empty");
    } else {
      setError("");
      setSubmittedUsername(username);
      setUserName("");
    }
  };
  return (
    <div>
      <h1>ControlledForm </h1>
      <form onSubmit={handleForm}>
        <div>
          <label>
            UserName:
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              value={username}
              placeholder="enter the username"
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{error}</p>
      <div>
        <h1>Submitted from</h1>
        <h2>{submittedUsername}</h2>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <ControlledForm />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
