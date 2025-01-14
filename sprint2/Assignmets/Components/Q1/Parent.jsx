import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [data, setData] = useState("hello Parent");
  return (
    <>
      <h1>Parent component</h1>

      <Child data={data} />
      <button onClick={() => setData("Hi Hello data received from parent")}>
        Update
      </button>
    </>
  );
}

export default Parent;
