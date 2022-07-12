import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import data from '../data/data.json'


const ItemListContainer = () => {

	const[productos, setProductos] = useState({})
	const  { prodId }   = useParams()
	console.log(prodId)
	
	useEffect(() => {
		const getItems = new Promise((resolve) => {
		const DatosFiltrados = data.find((item) => item.id === prodId)
		;
		resolve(DatosFiltrados);
		});
		
		getItems.then((res) => {
			setProductos(res);
		});
		}, []);

	return(
		<section className="container">
			
			<ItemDetail {...productos} />
			
		</section>
	);
  }

  export default ItemListContainer
  