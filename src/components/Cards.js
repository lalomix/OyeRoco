import { Card, Row, Col } from "react-bootstrap"
import ItemCount from './ItemCount'

function Cards (props){

return (
<Row className="container">
  <Col md="auto">
    <Card>
      <Card.Img variant="top" src={require(`../images/${props.img}`)} />  
        <Card.Body>
          <Card.Title>{props.marca} {props.nombre}</Card.Title>
          <Card.Text>
            {props.descripcion} 
          </Card.Text>
          <ItemCount />	
        </Card.Body>
    </Card>
  </Col>
</Row>
)
}
export default Cards;