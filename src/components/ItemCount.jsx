/* eslint-disable react/prop-types */
import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ToastContainer, toast } from 'react-toastify'

function ItemCount({ item }) {
  
  const [count, setCount] = useState(1)
  const {addToCart} = useContext(CartContext)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubstract = () => {
    count >1 && setCount(count - 1)
  }


  const handleClick = () => {
    handleAddToCart()
    notify()
  }

  const handleAddToCart = () => {
    addToCart({ ...item, quantity: count })
  }
  const notify = () => {
    toast("Producto agregado al carrito!")
  }

  return (
    <div>
      <p style={{ fontSize: "20px" }}>{count}</p>
      <button
        style={{
          backgroundColor: "rgba(206, 164, 164, 0.678)",
          border: "solid 1px white",
          borderRadius: "7px",
          color: "white",
        }}
        onClick={handleAdd}
      >
        Agregar
      </button>
      <button
        style={{
          backgroundColor: "rgba(206, 164, 164, 0.678)",
          border: "solid 1px white",
          borderRadius: "7px",
          color: "white",
        }}
        onClick={handleSubstract}
      >
        Quitar
      </button>
      <br></br>
      <button
        style={{
          backgroundColor: "rgba(243, 214, 214, 0.8)",
          border: "solid 1px white",
          borderRadius: "7px",
          color: "black",
        }}
        onClick={handleClick}
      >
        Agregar al carrito
      </button>
      <ToastContainer />
    </div>
  )
}

export default ItemCount
