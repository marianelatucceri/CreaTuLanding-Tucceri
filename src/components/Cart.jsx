import CartList from "./CartList"
import Button from "react-bootstrap/Button"
import { useCart } from "../context/CartContext"
import { Link } from "react-router"

function Cart () {
    const { cart, getTotal } = useCart()

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2>No tienes productos en el carrito</h2>
                <Button as={Link} to='/' variant='dark' className="ver-productos">Ir a ver productos</Button>
            </div>
        )
    }

    return (
        <div className="cart-list d-flex flex-column justify-content-center align-items-start">
            <CartList items={cart} />
            <p className="mt-3 fw-bold">Total: $ {getTotal()}</p>
            <Button variant='dark' className='ver-productos w-50'>Finalizar compra</Button>
        </div>
    )
}

export default Cart