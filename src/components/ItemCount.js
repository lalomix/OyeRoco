import './ItemCount.css'
import { useState } from "react";
import {FaCartPlus} from 'react-icons/fa'

function Contador (){
	const [num, setNum] = useState(0);
	const stock = 8;

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