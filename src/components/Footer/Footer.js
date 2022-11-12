import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
// import{NavLink} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='pie-de-pagina'>
            {/* Redes sociales y Copyright */}
            <div className="container redes">
                <div className="row">
                    <div className="col-md-6 col-sm-4">
                        <ul className="list-unstyled">
                            <li>Jose Gomez 1079</li>
                            <li> 03777-516220</li>
                            <li>herrajesarroyo@hotmail.com</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="/#"><FontAwesomeIcon icon={faFacebookSquare} size='2x' className="icono-redes m-2"/></a>
                        <a href="/#"><FontAwesomeIcon icon={faInstagramSquare} size='2x' className="icono-redes m-2"/></a>
                        <a href="/#"><FontAwesomeIcon icon={faTwitterSquare} size='2x' className="icono-redes m-2"/></a>
                    </div>

                </div>
            </div>
            <div className="footer-copyright text-center py-3">
                <p>Copyright Matias Arroyo© </p>
            </div>
            
        </div>
    )
}

export default Footer
