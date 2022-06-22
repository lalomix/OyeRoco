import cart from '../images/cart.png'

function CartWidget() {
	return (
		<div className='bi bi-cart'>
			
            <img src={cart} alt='icono del carro de compras' />
		</div>
	)
  }
  
  export default CartWidget;