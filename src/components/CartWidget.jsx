 
import { Link } from "react-router"
import { useContext } from "react"
import { CartContex } from "../context/CartContext";

function CartWidget() {
    const {getQty} = useContext(CartContex)

  return (
    <Link to="/cart" className="cart texto-white text-decoration-none">
      🛒{getQty()}
    </Link>
  )
}
export default CartWidget;
