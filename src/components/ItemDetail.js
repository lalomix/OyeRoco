import React from 'react'
import { Card, Row, Col } from "react-bootstrap"
import ItemCount from './ItemCount'

export default function Item ({ id, img, marca, nombre, descripcion2, precio }){
	return (
	  <div>
		<Row className="container block-example border border-primary rounded space">
			<Col md="6">
				<Card.Img variant="top" src={'https://external.724.cl/' + img} alt={id} style={{ width: '18rem' }} />  
			</Col>
			<Col md="6">
			  <Card.Body>
				<Card.Subtitle className="mb-2 text-muted">{marca}</Card.Subtitle>
				<Card.Title className="text">{nombre}</Card.Title>
				  <Card.Text>
					{descripcion2} 
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
  