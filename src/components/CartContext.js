import { createContext, useState } from 'react'

export const CartContext = createContext({}) 

const {Provider} = CartContext

	const Carrito = []

export const CartProvider = ({ defaulValue = [], children }) => {
	const [cart, setCart] = useState(defaulValue);

	const clearCart = () =>	{
		setCart([]);
	}
	const addToCart = (item, cantidad) => {
		setCart([...cart,{item: item, cantidad: cantidad}])
	}
	const isInCart = () => {
		
	}
	const removeItem = () => {
		
	}

	const context = {
		clearCart,
		addToCart,
		isInCart,
		removeItem
	}

  return (
	<Provider value={context}>
		{children}
	</Provider>
  )
}
