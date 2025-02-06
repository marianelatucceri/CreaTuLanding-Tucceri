/* eslint-disable react/prop-types */
import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"

function CartList ({ items }) {

    return (
        <ListGroup classname='w-50'>
            {items.map(item => (
              <ListGroup.Item classname='d-flex justify-content-between' key={item.id}>
                {item.name}  ${item.price}
               
               <Button variant='dark' className="ver-productos">+</Button> 
               <Button variant='dark' className="ver-productos">-</Button> 
               
               Cantidad: {item.quantity} 
                
              </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default CartList