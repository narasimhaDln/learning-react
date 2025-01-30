
import useToggle from './useToggele'
function Toggle() {
    const[state,toggle]=useToggle("B");
  return (
    <div>
        <h1>Current Item:{state}</h1>
        <button onClick={toggle}>Toggle Item</button>
    </div>
  )
}

export default Toggle