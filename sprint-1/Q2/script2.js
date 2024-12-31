const lan = ["javascript", "HTML", "CSS"];
const ele = (
  <>
    <ul>
      {lan.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </>
);
ReactDOM.createRoot(document.querySelector("#root")).render(ele);
