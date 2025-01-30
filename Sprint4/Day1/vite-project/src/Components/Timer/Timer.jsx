import { useEffect } from "react";
import useTimer from "./useTimer";
function Timer() {
   const {seconds, start, stop, setSeconds,reset, isRunning }=useTimer()
    useEffect(()=>{
        const timerId=setInterval(() => {
             if(isRunning){
                setSeconds((prev)=>prev+1)
             }
        }, 1000);
        return ()=>clearInterval(timerId)
    },[isRunning])
  return (
    <div>
        <h1>Timer:{seconds}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer