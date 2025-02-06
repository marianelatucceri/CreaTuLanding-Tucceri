import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useCart } from "../context/CartContext"
import { createOrder } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"
import { Link } from "react-router"



function Checkout() {

    const { cart, getTotal } = useCart()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target 
        const [name, email, phone] = form

        const order = {
            buyer: {name: name.value, email: email.value, phone: phone.value},
            items: cart,
            date: serverTimestamp(),
            total: getTotal()
        }

        createOrder(order)
    }

  return (
    <div className="d-flex align-items-center justify-content-center">
       <Form className="w-25 mt-5 form" onSubmit={handleSubmit}>
         <h3 className="mb-5">Complete los datos para finalizar la compra:</h3>

         <Form.Group className="mb-3" controlId="name">
             <Form.Label>Nombre</Form.Label>
             <Form.Control type="text" placeholder="Jose Perez" required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="email">
             <Form.Label>Email</Form.Label>
             <Form.Control type="email" placeholder="joseperez@gmail.com" required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="phone">
             <Form.Label>Teléfono</Form.Label>
             <Form.Control type="text" placeholder="+541158659654" required />
         </Form.Group>

         <Button className="ver-productos" as={Link} to="/modalcheckout" variant="dark" type="submit">
          Comprar
         </Button>
       </Form>
    </div>
  )
}

export default Checkout
