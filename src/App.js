import Header from './components/Header';
import {Routes, Route } from "react-router-dom";
import PageNotFound from './pages/PageNotFound'
import { BrowserRouter} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import {CartProvider} from './components/CartContext';

function App() {
	return (
		<div>
			<CartProvider>
				<BrowserRouter>
					<Header />
						<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/categoria/:catId" element={<ItemListContainer />} />
						<Route path="/productos/:prodId" element={<ItemDetailContainer />} />
						<Route path="*" element={<PageNotFound />} />						
					</Routes>
				</BrowserRouter>	
			</CartProvider>
		</div>
	)
  }
  
  export default App;
