import { createContext, useState } from 'react'

export const CartContext = createContext({}) 

const {Provider} = CartContext

	const ejemploCarrito = []






export const CartProvider = ({ defaulValue = [], children }) => {
	const [cart, setCart] = useState(defaulValue);

	const clearCart = () =>	{
		setCart([]);
	}
	const addToCart = (item, cantidad) => {
		setCart([...cart,{item: item, cantidad: cantidad}])
	}




	const context = {
		clearCart,
		addToCart
	}

  return (
	<Provider value={context}>
		{children}
	</Provider>
  )
}
