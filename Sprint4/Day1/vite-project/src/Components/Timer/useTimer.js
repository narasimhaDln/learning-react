import { useState } from "react";

function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };
  return { seconds, start, stop, setSeconds, reset, isRunning };
}

export default useTimer;
