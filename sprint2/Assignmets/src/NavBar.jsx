
import HomePage from './Routing/HomePage'
import AboutPage from './Routing/AboutPage'
import ContactPage from './Routing/ContactPage'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='nav-section'>
      <ul>
        <Link to="/">
        <li>HomePage</li>
        </Link>
        <Link to="/contactPage">
        <li>ContactPage</li>
        </Link>
        <Link to="/aboutPage">
        <li> AboutPage</li>
        </Link>
      </ul>
    </div>
  )
}

export default NavBar