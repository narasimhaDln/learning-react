const EmailForm = () => {
  const [emails, setEmails] = React.useState([""]);
  const [errors, setErrors] = React.useState([""]);

  let handleEmailChange = (index, value) => {
    let newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
    validateEmails(newEmails);
  };

  let addEmailFields = () => {
    setEmails([...emails, ""]);
  };

  let validateEmails = (emailList) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let newErrors = emailList.map((email) =>
      emailRegex.test(email) ? "" : "Invalid email format"
    );
    setErrors(newErrors);
  };

  return (
    <div>
      <h2>Add multiple emails</h2>
      <form>
        {emails.map((email, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                placeholder="enter email here"
                value={email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
              />
              {errors[index] && (
                <span style={{ color: "red" }}>{errors[index]}</span>
              )}
            </div>
          );
        })}
        <button type="button" onClick={addEmailFields}>
          Add Email
        </button>
      </form>
      <h3>Entered Emails</h3>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>
            {email || "Empty Field"} {errors[index] && "(Invalid)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>Question 3 working</h1>
      <EmailForm />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
