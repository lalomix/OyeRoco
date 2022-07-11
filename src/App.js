import Header from './components/Header';
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Perros from './pages/Perros';
import Gatos from './pages/Gatos';
import OtrasMascotas from './pages/OtrasMascotas';
import Contacto from './pages/Contacto';
import PageNotFound from './pages/PageNotFound'
import { BrowserRouter} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
					<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/perros" element={<Perros />} />
					<Route path="/gatos" element={<Gatos />} />
					<Route path="/otras-mascotas" element={<OtrasMascotas />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/productos/:prodId" element={<ItemDetailContainer />} />
					<Route path="*" element={<PageNotFound />} />						
				</Routes>
			</BrowserRouter>	
		</div>
	)
  }
  
  export default App;
