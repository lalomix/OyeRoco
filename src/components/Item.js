import { Card, Row, Col } from "react-bootstrap"
import ItemCount from './ItemCount'
import '../Styles/Item.css'
import { Link } from 'react-router-dom';

export default function Item ({ id, img, marca, nombre, descripcion, precio }){
  return (
    <div>
      <Row className="container block-example border border-primary rounded space">
          <Col md="6">
              <Card.Img variant="top" src={process.env.PUBLIC_URL + img} style={{ width: '18rem' }} />  
          </Col>
          <Col md="6">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">{marca}</Card.Subtitle>
              <Card.Title className="text" as={Link} to={`/productos/${id}`}>{nombre}</Card.Title>
                <Card.Text>
                  {descripcion} 
                </Card.Text>
              <Card.Title className="precio">$ {precio}</Card.Title>
            </Card.Body>
          </Col>
          <Col>
            <ItemCount />	
          </Col>
    </Row>
  </div>
  )
}
