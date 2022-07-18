import '../Styles/ItemCount.css'
import { useEffect, useState } from "react";
import {FaCartPlus} from 'react-icons/fa'
import Swal from 'sweetalert2';

function Contador (){
	const [num, setNum] = useState(0);
	const stock = 8;

	useEffect(()=> {
		if (num === stock){
			Swal.fire({
				title: 'Ups!!',
				text: 'lamentablemente no tenemos más stock',
				icon: 'error',
				confirmButtonText: 'Volver'
	  		})
		}
	},[num])

	const sumar = () => {
		if (num<stock){
		setNum(num + 1)	
		}
	}
	const restar = () => {
		if (num>0){
		setNum(num - 1)	
		}
	}

	const agregar = () => {
		Swal.fire({
			title: 'Producto agregado correctamente',
			icon: 'success',
			confirmButtonText: 'Volver'
		  })
		{
		
		}
	}

	return(
	< div className='d-flex justify-content-end'>
		
		<h2>{num}</h2>
		<button onClick={restar} className="btn btn-primary btn-space">-</button>
		<button onClick={sumar} className="btn btn-primary">+</button>
		<button onClick={agregar} className="btn btn-primary btn-space"><FaCartPlus />  Agregar al Carro</button>
       	</ div>
	)
}
export default Contador;