import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import data from '../data/data.json'


const ItemListContainer = () => {

	const[productos, setProductos] = useState([])
	const  { catId }  = useParams()
	
	useEffect(() => {
		const getItems = new Promise((resolve) => {
		const DatosFiltrados = catId ? data.filter(item => item.categoria === catId)
		: data;
		resolve(DatosFiltrados);
		});
		
		getItems.then((res) => {
			setProductos(res);
		});
		}, [catId]);

	return(
		<section className="container">
			
			<ItemList ListadoProductos={productos} />
			
		</section>
	);
  }

  export default ItemListContainer
  