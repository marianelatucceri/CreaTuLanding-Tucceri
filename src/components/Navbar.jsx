import logo from '../assets/logo2.png'
import CartWidget from './CartWidget'

function Navbar () {
    return (
        <div className="nav-container">

            <img src={logo} alt="logo de Charm Home" />

            <nav className="navbar">
                <ul className='categorias'>
                    <li><a href="">Decoración</a></li>
                    <li><a href="">Muebles</a></li>
                    <li><a href="">Textiles</a></li>
                </ul>
            </nav>

            <CartWidget />
        </div>
    )
}
export default Navbar 