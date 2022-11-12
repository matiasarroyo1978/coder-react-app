import React from 'react';
import { Navbar,Container,Nav, NavDropdown, NavbarBrand,NavLink} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import LogoNavBar from '../LogoNavBar/LogoNavBar'
import CartWidget from '../CartWidget/CartWidget'
// import { useCartContext } from '../../context/cartContext';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function Brand() {
  // const { iconCart } = useCartContext()
  return (
      <div>
      <Navbar bg="dark" variant="dark" sticky='top'>
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
            {/* <NavDropdown title="Categorias" id="collasible-nav-dropdown" className='link-nav menu-list'>
               <NavDropdown.Item><NavLink><Link to="/category/Cerraduras" className='link-nav'   activeclassname="link-activo" >Cerraduras </Link></NavLink></NavDropdown.Item>
               <NavDropdown.Item><NavLink ><Link to="/category/Corredizos" className='link-nav'   activeclassname="link-activo"> Corredizos </Link></NavLink></NavDropdown.Item>
               <NavDropdown.Item><NavLink ><Link to="/category/Bisagras" className='link-nav'   activeclassname="link-activo"> Bisagras </Link></NavLink></NavDropdown.Item>
               <NavDropdown.Item><NavLink ><Link to="/category/Picaportes" className='link-nav'   activeclassname="link-activo"> Picaportes</Link></NavLink></NavDropdown.Item>
               <NavDropdown.Item><NavLink ><Link to="/category/Adhesivos" className='link-nav'   activeclassname="link-activo"> Adhesivos </Link></NavLink></NavDropdown.Item>
               <NavDropdown.Item><NavLink ><Link to="/category/Maderas" className='link-nav'   activeclassname="link-activo"> Maderas </Link></NavLink></NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.2">Sanitarios</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cloacas</NavDropdown.Item> 
           </NavDropdown> */}
              <NavDropdown title="Categorias" id="collasible-nav-dropdown" className='menu-list'>
          <NavDropdown.Item><NavLink><Link to="/category/Electricidad" className='menu-list'   activeclassname="link-activo" > Electricidad </Link></NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink ><Link to="/category/Herramientas" className='menu-list'   activeclassname="link-activo"> Herramientas </Link></NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink ><Link to="/category/Jardineria" className='menu-list'   activeclassname="link-activo"> Jardineria </Link></NavLink></NavDropdown.Item>
          {/* <NavDropdown.Item href="#action/3.2">Sanitarios</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Cloacas</NavDropdown.Item> */}
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

// function Brand() {

//   return (
      
//   <div>
//   <Navbar expand="lg" className="style-NavBar">
  
//     <Container>
//     <Link to="/"><LogoNavBar /></Link>
//       <NavbarBrand>
      
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
//       <Navbar.Collapse id="basic-navbar-nav">
      
//         <Nav className="me-auto navegacion">
        
//           <NavLink ><Link to="/" className='link-nav'  activeclassname="link-activo">Inicio</Link></NavLink>
//           <NavLink ><Link to="/products" className='link-nav' activeclassname="link-activo">Productos</Link></NavLink>
  
//           <NavDropdown title="Categorias" id="collasible-nav-dropdown" className='link-nav'>
//             <NavDropdown.Item><NavLink><Link to="/category/Electricidad" className='link-nav'   activeclassname="link-activo" > Electricidad </Link></NavLink></NavDropdown.Item>
//             <NavDropdown.Item><NavLink ><Link to="/category/Herramientas" className='link-nav'   activeclassname="link-activo"> Herramientas </Link></NavLink></NavDropdown.Item>
//             <NavDropdown.Item><NavLink ><Link to="/category/Jardineria" className='link-nav'   activeclassname="link-activo"> Jardineria </Link></NavLink></NavDropdown.Item>
//             {/* <NavDropdown.Item href="#action/3.2">Sanitarios</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Cloacas</NavDropdown.Item> */}
//             </NavDropdown>
                 
//           <Nav.Link ><Link to="/contacto" className='link-nav'   activeclassname="link-activo">Contacto</Link></Nav.Link>
//           <Nav.Link ><Link to="/nosotros" className='link-nav'   activeclassname="link-activo">Nosotros</Link></Nav.Link>
//           <CartWidget className="d-flex"/> 
          
//           {/* {/* {/* <Form className="d-flex">
//           <FormControl
//           type="search"
//           placeholder="Buscar producto"
//           className="mr-2"
//           aria-label="Buscar"
//         />
//         <Button variant="outline-light" >Buscar</Button>
//       </Form>
//         */}
      
//         </Nav>
//       </Navbar.Collapse>
//       </NavbarBrand>
      
//     </Container>
    
//   </Navbar>
//   </div>
  
//   )
//   }
// export default Brand;