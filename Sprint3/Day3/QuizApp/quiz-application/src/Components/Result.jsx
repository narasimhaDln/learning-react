import { useSelector } from "react-redux"

function Result() {
    const {score}=useSelector((state)=>state.quiz)
  return (
    <div>
        <h1>Your Score:{score}</h1>
    </div>
  )
}

export default Result