function Display() {
  const [currentPage, setCurrentPage] = React.useState("");
  const handlePages = (page) => {
    if (page === "home") {
      return setCurrentPage(<h1>welcome to home page</h1>);
    } else if (page === "contact") {
      return setCurrentPage(<h1>welcome to contact page</h1>);
    } else if (page === "about") {
      return setCurrentPage(<h1>welcome to about page</h1>);
    }
  };
  return (
    <div>
      <a href="#" onClick={() => handlePages("home")}>
        Home
      </a>
      |
      <a href="#" onClick={() => handlePages("contact")}>
        contact
      </a>
      |
      <a href="#" onClick={() => handlePages("about")}>
        about
      </a>
      <div>{currentPage}</div>
    </div>
  );
}
ReactDOM.createRoot(document.querySelector("#root")).render(<Display />);
