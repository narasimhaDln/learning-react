import { useState, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);

  const startTimer = () => {
    if (intervalId.current === null) {
      intervalId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  const resetTimer = () => {
    clearInterval(intervalId.current);
    setTime(0);
  };

  return (
    <div>
      <h1>Time Left: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
