import CartList from "./CartList"
import Button from "react-bootstrap/Button"
import { useCart } from "../context/CartContext"
import { Link } from "react-router"

function Cart () {
    const { cart, getTotal, vaciarCarrito } = useCart()

    const handleVaciar = () => {
        vaciarCarrito()
    }

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2>No tienes productos en el carrito 😔</h2>
                <Button as={Link} to='/' variant='dark' className="ver-productos-cart">Ir a ver productos</Button>
            </div>
        )
    }

    return (
        <div className="cart-list d-flex flex-column justify-content-center align-items-start">
            <CartList items={cart} />
            <p className="mt-3 fw-bold">Precio Total: $ {getTotal()}</p>
            <Button variant='dark' className='ver-productos w-50'>Finalizar compra</Button>
            <Button variant='dark' className='ver-productos w-50' onClick={handleVaciar}>Vaciar carrito</Button>
        </div>
    )
}

export default Cart