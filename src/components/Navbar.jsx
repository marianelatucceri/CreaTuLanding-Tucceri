import logo from "../assets/logonuevo1.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="nav-container">
      <Link to="/">
        <img src={logo} alt="logo de Charm Home" />
      </Link>
      <nav className="navbar">
        <ul className="categorias">
          <li>
            <Link to="/category/decoracion">Decoración</Link>
            <Link to="/category/iluminacion">Iluminación</Link>
            <Link to="/category/muebles">Muebles</Link>
            <Link to="/category/textiles">Textiles</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
}
export default Navbar;
