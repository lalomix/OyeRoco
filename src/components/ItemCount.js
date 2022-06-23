import './ItemCount.css'
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

	return(
	<>
		
		<h1>{num}</h1>
		<button onClick={restar} class="btn btn-primary btn-space">-</button>
		<button onClick={sumar} class="btn btn-primary">+</button>
		<button type="button" class="btn btn-primary btn-space"><FaCartPlus />  Agregar al Carro</button>
       
		
	</>
	)
}
export default Contador;