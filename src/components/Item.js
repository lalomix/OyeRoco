import { Card, Row, Col, CardGroup } from "react-bootstrap"
import ItemCount from './ItemCount'

function Item (props){

return (
  
<Row className="container">
  <Col md="auto">
  <CardGroup>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + props.img} width="200px" />  
        <Card.Body>
          <Card.Title>{props.marca} {props.nombre}</Card.Title>
          <Card.Text>
            {props.descripcion} 
          </Card.Text>
          <ItemCount />	
        </Card.Body>
    </Card>
    </CardGroup>
  </Col>
</Row>
)
}
export default Item;