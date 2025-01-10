import { useState, useEffect } from "react";
function MyComponent() {
  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    console.log("component mounted");
    return function () {
      console.log("component unmounted");
    };
  }, []);
  const toggleVisibility = () => {
    setVisible(!isVisible);
  };
  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"}Component
      </button>
      {isVisible && <p>component is mounts and unmounts</p>}
    </div>
  );
}
export default MyComponent;
