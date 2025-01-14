
import './App.css'
import HomePage from './Routing/HomePage'
import ContactPage from './Routing/ContactPage'
import AboutPage from './Routing/AboutPage'
import { Route, Routes } from 'react-router-dom'
import NavBar from "./NavBar"
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contactPage' element={<ContactPage/>}/>
        <Route path='/aboutPage' element={<AboutPage/>}/>
      </Routes>
    </div>
      
  )
}

export default App
