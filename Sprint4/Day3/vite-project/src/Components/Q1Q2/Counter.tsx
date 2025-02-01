import { useEffect, useState } from "react"

function Counter() {
    const[seconds,setSeconds]=useState<number>(0)
    const[isRunning,setIsRunning]=useState<boolean>(false)
    useEffect(()=>{
        const timerId=setInterval(() => {
            if(isRunning){
                setSeconds((prev)=>prev+1)
            }
        },1000);
        return ()=>{
            clearInterval(timerId)
        }
    },[isRunning])
    const startTimer=()=>setIsRunning(true);
    const stopTimer=()=>setIsRunning(false);
    const resetTimer=(()=>{
        setIsRunning(false)
        setSeconds(0)
    })
  return (
    <div>
        <h1>Counter using Type script</h1>
        <h3>TImer:{seconds}</h3>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
        <button onClick={resetTimer}>reset</button>
    </div>
  )
}

export default Counter