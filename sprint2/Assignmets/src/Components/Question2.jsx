import { useRef } from "react";
function FocusInput() {
  const focusRef = useRef(null);
  const handleFocus = () => {
    focusRef.current.focus();
  };
  return (
    <>
      <input ref={focusRef} type="text" placeholder="enter your name" />
      <button style={{ backgroundColor: "brown" }} onClick={handleFocus}>
        Click Me
      </button>
    </>
  );
}
export default FocusInput;
