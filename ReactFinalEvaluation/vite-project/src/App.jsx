import TodoApp from "./Components/TodoList/TodoApp"

import PokemanMain from "./Components/PokemonApp/PokemanMain"

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div>
     
      <ChakraProvider>
      <TodoApp/>
      <PokemanMain/>
    </ChakraProvider>
    </div>
  )
}

export default App