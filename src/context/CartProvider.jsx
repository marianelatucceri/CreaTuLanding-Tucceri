/* eslint-disable react/prop-types */
import { CartContext } from "./CartContext"

export default function CartProvider ({ children }) {
    return (
        <CartContext.Provider value={5}>
            {children}
        </CartContext.Provider>
    )
}