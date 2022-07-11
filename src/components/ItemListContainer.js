import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";


export const ItemListContainer = ({ greeting }) => {

	const[productos, setProductos] = useState([])

	useEffect(() => {
		fetch('data.json')
		.then((resp) => resp.json())
		.then ((data) => setProductos(data))	
	},[])

	return(
		<section className="container">
			
			<ItemList ListadoProductos={productos} />
			
		</section>
	);
  }

  export default ItemListContainer
  