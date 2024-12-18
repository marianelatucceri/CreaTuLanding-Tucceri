/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import { Link } from "react-router"

function Item ({ item }) {
    return (
        <Col sm={3}>
            <Card className="card">
              <Card.Img variant="top" src={item.thumbnail} className="card-img"/>
              <Card.Body className="card-body">
                <Card.Title className="title">{item.title}</Card.Title>
                <Card.Text className="text">{item.category}</Card.Text>
                <Card.Text className="price">${item.price}</Card.Text>
                <Button variant="secondary" as= {Link} to={`/item/${item.id}`} className="button">Detalle</Button>
              </Card.Body>
            </Card>          
        </Col>
    )
}

export default Item 