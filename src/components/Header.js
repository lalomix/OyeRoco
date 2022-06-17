import './Header.css';
import logo from '../images/logo.gif'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap';


function Header() {
  return (
	<div className=''>
		<Navbar bg='secondary'>
			<Navbar.Brand className='color-font'>
				<img src={logo} width='50px' />
				 Roco Store
			</Navbar.Brand>
		</Navbar>
	</div>
  )
}

export default Header;