/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Item ({ item }) {
    return (
        <Col sm={3}>
            <Card style={{ width: '18rem' }} className="card">
              <Card.Img variant="top" src={item.image} className="card-img"/>
              <Card.Body className="card-body">
                <Card.Title className="title">{item.title}</Card.Title>
                <Card.Text className="text">{item.description}</Card.Text>
                <Card.Text className="price">${item.price}</Card.Text>
                <Button variant="secondary" className="button">Agregar al carrito</Button>
              </Card.Body>
            </Card>          
        </Col>
    )
}

export default Item 