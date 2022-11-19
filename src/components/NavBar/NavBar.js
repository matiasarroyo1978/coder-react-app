import React,{useState, useEffect} from 'react';
import { Navbar,Container,Nav, NavDropdown, NavbarBrand,NavLink} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoNavBar from '../LogoNavBar/LogoNavBar'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import './darkMode.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
function Brand() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  
  return (
    
      <div className={`App ${theme}`}>
        <Navbar expand="lg" className="style-NavBar">

        <Container>
        <NavbarBrand>
        <Link to ='/'> <LogoNavBar/> </Link>
  
       </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
        <Navbar.Collapse id="basic-navbar-nav">
    
         <Nav className="me-auto navegacion">
      
        <NavLink ><Link to="/" className='link-nav'  activeclassname="link-activo">Inicio</Link></NavLink>
        <NavLink ><Link to="/products" className='link-nav' activeclassname="link-activo">Productos</Link></NavLink>

        <NavDropdown title="Categorias" id="collasible-nav-dropdown" className='link-nav'>
          <NavDropdown.Item><NavLink><Link to="/category/cerraduras" className='link-nav'   activeclassname="link-activo" > Cerraduras </Link></NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink ><Link to="/category/corredizos" className='link-nav'   activeclassname="link-activo"> Corredizos </Link></NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink ><Link to="/category/bisagras" className='link-nav'   activeclassname="link-activo"> Bisagras </Link></NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink ><Link to="/category/adhesivos" className='link-nav'   activeclassname="link-activo"> Adhesivos </Link></NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink ><Link to="/category/picaportes" className='link-nav'   activeclassname="link-activo"> Picaportes </Link></NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink ><Link to="/category/maderas" className='link-nav'   activeclassname="link-activo"> Maderas </Link></NavLink></NavDropdown.Item>
        </NavDropdown>
               
        <Nav.Link ><Link to="/contacto" className='link-nav'   activeclassname="link-activo">Contacto</Link></Nav.Link>
        <Nav.Link ><Link to="/nosotros" className='link-nav'   activeclassname="link-activo">Nosotros</Link></Nav.Link>
        <CartWidget className="d-flex"/> 
               
        </Nav>
          <button variant="light" onClick={toggleTheme}><FontAwesomeIcon icon={faToggleOff}/></button>
        </Navbar.Collapse>
        
    
        </Container>
  
      </Navbar>
</div>
     
)}

export default Brand;

