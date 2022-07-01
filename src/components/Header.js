import './Header.css';
import logo from '../images/logohome.gif'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, NavLink, Nav } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import CartWidget from './CartWidget';

function Header() {
  return (
	<div>
		<Navbar bg='primary' sticky='top' expand='lg'  >
			<div className='container'>
			<Navbar.Brand>
				<img src={logo} width='250px' alt='logo de roco store' />
			</Navbar.Brand>
			<NavbarToggle /> 
			<NavbarCollapse>
				<Nav className='navbar-nav ms-auto'>
					<NavLink className='linkcustom' to='/home'>Home</NavLink>
					<NavLink className='linkcustom' to='/perros'>Perros</NavLink>
					<NavLink className='linkcustom' to='/gatos'>Gatos</NavLink>
					<NavLink className='linkcustom' to='/otras-mascotas'>Otras Mascotas</NavLink>
					<NavLink className='linkcustom' to='/contacto'>Hablemos!</NavLink>
					<CartWidget />
				</Nav>				
			</NavbarCollapse>
			</div>
		</Navbar>
	</div>
  )
}

export default Header;