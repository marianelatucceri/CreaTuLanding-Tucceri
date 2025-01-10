/* eslint-disable react/prop-types */
import { ListGroup } from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"

function CartList ({ items }) {
    return (
        <ListGroup classname='w-50'>
            {items.map(item => (
              <ListGroup.Item classname='d-flex justify-content-between' key={item.id}>
                {item.title} x{item.quantity}
                <Button variant='danger'>X</Button>
              </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default CartList