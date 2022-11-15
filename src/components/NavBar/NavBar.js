import React from 'react';
import { Navbar,Container,Nav, NavDropdown, NavbarBrand,NavLink} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import LogoNavBar from '../LogoNavBar/LogoNavBar'
import CartWidget from '../CartWidget/CartWidget'
// import UseCartContext  from '../../context/CartContext';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function Brand() {
  // const { iconCart } = UseCartContext()
  return (
      <div>
      <Navbar className='bg-dark navbar-dark navbar sticky-top'>
        <Container>
          <NavbarBrand>
            <Link to ='/'> <LogoNavBar/> </Link>
          </NavbarBrand>
          <ul className='menu-items'>
           <li>
             <Nav.Link><Link to = '/nosotros' className='menu-list' activeclassname="link-activo">Nosotros</Link></Nav.Link>
            </li>
            <li>
              <NavLink ><Link to="/products" className='menu-list' activeclassname="link-activo">Productos</Link></NavLink>
            </li>
            <li>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown" className='link-nav menu-list text-decoration-none'>
               <NavDropdown.Item><NavLink><Link to="/category/cerraduras" className='link-nav'   activeclassname="link-activo " >Cerraduras </Link></NavLink></NavDropdown.Item>
               <NavDropdown.Item><NavLink ><Link to="/category/corredizos" className='link-nav'   activeclassname="link-activo menu-list"> Corredizos </Link></NavLink></NavDropdown.Item>
               <NavDropdown.Item><NavLink ><Link to="/category/bisagras" className='link-nav'   activeclassname="link-activo menu-list"> Bisagras </Link></NavLink></NavDropdown.Item>
               <NavDropdown.Item><NavLink ><Link to="/category/picaportes" className='link-nav'   activeclassname="link-activo menu-list"> Picaportes</Link></NavLink></NavDropdown.Item>
               <NavDropdown.Item><NavLink ><Link to="/category/adhesivos" className='link-nav'   activeclassname="link-activo menu-list"> Adhesivos </Link></NavLink></NavDropdown.Item>
               <NavDropdown.Item><NavLink ><Link to="/category/maderas" className='link-nav'   activeclassname="link-activo menu-list"> Maderas </Link></NavLink></NavDropdown.Item>
            
          </NavDropdown>
            </li>
            <li>
             <Nav.Link><Link to = '/contacto' className='menu-list' activeclassname="link-activo">Contacto</Link></Nav.Link>
            </li>

          </ul>
        <div>
          <Link to = '/Cart'> <CartWidget/> </Link>
        </div>
        </Container>
      </Navbar>
      </div>
     
)}

export default Brand;

