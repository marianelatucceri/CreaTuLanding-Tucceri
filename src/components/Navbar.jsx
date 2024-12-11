import logo from '../assets/logonuevo1.png'
import CartWidget from './CartWidget'

function Navbar () {
    return (
        <div className="nav-container">

            <img src={logo} alt="logo de Charm Home" />

            <nav className="navbar">
                <ul className='categorias'>
                    <li><a href="">Indumentaria</a></li>
                    <li><a href="">Joyas</a></li>
                    <li><a href="">Electrónica</a></li>
                </ul>
            </nav>

            <CartWidget />
        </div>
    )
}
export default Navbar 