import { useEffect } from "react";
import { useState } from "react";
import Item from './Item'


function ItemList() {

	const[productos, setProductos] = useState([])

	useEffect(() => {
		fetch('data.json')
		.then((resp) => resp.json())
		.then ((data) => setProductos(data))	
	},[])

	return(
		<section className="container">
			<div>
				<h1 className="d-flex justify-content-center">Productos en Oferta</h1>
			</div>
			<div className="container">
			{ productos && productos.map(i => <Item img={i.img} marca={i.marca} nombre={i.nombre} descripcion={i.descripcion}  descripcion2={i.descripcion2}/> )}	
				
			</div>
		</section>
	);



}
export default ItemList;