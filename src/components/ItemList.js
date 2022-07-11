import React from 'react'
import Item from './Item'


const ItemList = ({ ListadoProductos }) => {

  return (

	<div>
		{ ListadoProductos && ListadoProductos.map(i => <Item key = {i.id} img={i.img} id={i.id} marca={i.marca} nombre={i.nombre} descripcion={i.descripcion}  descripcion2={i.descripcion2} precio={i.precio} /> )}	
	</div>

  )
}

export default ItemList
