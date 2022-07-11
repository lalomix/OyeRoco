import { useParams } from 'react-router-dom'
import { useEffect } from "react"
import { useState } from "react"
import Item from './Item'

export default function Detail() {

    const params = useParams()
    const[productos, setProductos] = useState([])

	useEffect(() => {
		fetch('../data.json')
		.then((resp) => resp.json())
		.then ((data) => setProductos(data))	
	},[])
  
	return(
		<section className="container">
      
			{ productos && productos.map(i =>  <Item img={i.img} id={i.id} marca={i.marca} nombre={i.nombre} descripcion={i.descripcion}  descripcion2={i.descripcion2} precio={i.precio} /> )}	
		</section>
	);

}
