
import './App.css'
import AddBookForm from './Components/AddBookForm'
import BookList from './Components/BookList'
import Filter from './Components/Filter'

function App() {
  return (
    <div>
     <h1>Book Library</h1>
     <AddBookForm/>
     <Filter/>
     <BookList/>
    </div>
  )
}

export default App
