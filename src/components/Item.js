import { Card, Row, Col } from "react-bootstrap"
import ItemCount from './ItemCount'
import '../Styles/Item.css'
import { Link } from 'react-router-dom';

function Item (props){
  return (
    <div>
      <Row className="container block-example border border-primary rounded space">
          <Col md="6">
              <Card.Img variant="top" src={process.env.PUBLIC_URL + props.img} style={{ width: '18rem' }} />  
          </Col>
          <Col md="6">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">{props.marca}</Card.Subtitle>
              <Card.Title className="text" as={Link} to={`/productos/${props.id}`}>{props.nombre}</Card.Title>
                <Card.Text>
                  {props.descripcion} 
                </Card.Text>
              <Card.Title className="precio">$ {props.precio}</Card.Title>
            </Card.Body>
          </Col>
          <Col>
            <ItemCount />	
          </Col>
    </Row>
  </div>
  )
}
export default Item;