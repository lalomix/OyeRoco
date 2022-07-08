import ItemListContainer from '../components/ItemListContainer';
import '../Styles/Home.css'

export default function Home(){
	return (
	<div>
		<div className='content'>
			<h1 className="d-flex justify-content-center">Productos en Oferta</h1>
		</div>
		<ItemListContainer />
	</div>
	)
	
}
