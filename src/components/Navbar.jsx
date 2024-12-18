 
import logo from '../assets/logonuevo1.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router'

function Navbar () {
    return (
        <div className="nav-container">
           <Link to="/">
              <img src={logo} alt="logo de Charm Home" />
           </Link>
            <nav className="navbar">
                <ul className='categorias'>
                    <li>
                        <Link to="/category/beauty">Beauty</Link>
                        <Link to="/category/fragrances">Fragrances</Link>                 
                        <Link to="/category/furniture">Furniture</Link>
                        <Link to="/category/groceries">Groceries</Link>
                    </li>
                </ul>
            </nav>

            <CartWidget />
        </div>
    )
}
export default Navbar 