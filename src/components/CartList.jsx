/* eslint-disable react/prop-types */
import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"
import { useState } from 'react'



function CartList ({ items }) {
   const [count, setCount] = useState(0)

   const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSubstract = () => {
    setCount(count - 1);
  }

    return (
        <ListGroup classname='w-50'>
            {items.map(item => (
              <ListGroup.Item classname='d-flex justify-content-between' key={item.id}>
                {item.name}  ${item.price}
               
               <Button variant='dark' className="ver-productos" onClick={handleAdd}>+</Button> 
               <Button variant='dark' className="ver-productos" onClick={handleSubstract}>-</Button>

                Cantidad: {item.quantity} 
                
              </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default CartList