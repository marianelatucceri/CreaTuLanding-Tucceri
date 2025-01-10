import CartList from "./CartList"
import { Button } from "react-bootstrap/Button"
import { useCart } from "../context/CartContext"

function Cart () {
    const { cart } = useCart()

    return (
        <div className="d-flex flex-column justify-content-center align-items-start">
            <CartList items={cart} />
            <p className="mt-3 fw-bold">Total: $</p>
            <Button variant='dark' className='w-50'>Finalizar compra</Button>
        </div>
    )
}

export default Cart