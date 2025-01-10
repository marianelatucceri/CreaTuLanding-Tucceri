/* eslint-disable react/prop-types */
import { CartContext } from "./CartContext"
import { useState } from "react"


export default function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = item => {
        const isInCart = cart.some(prod =>prod.id === item.id)

        if (!isInCart) return setCart([...cart, item])
    }

    const getQty =() => {
        const cantidades = cart.map(item => item.quantity)
        const cantidadTotal = cantidades.reduce((acc, current) => acc + current, 0)
        return cantidadTotal
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, getQty }}>
            {children}
        </CartContext.Provider>
    )
}