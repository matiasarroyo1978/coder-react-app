import React from 'react';
import './Nosotros.css';
import quienes from '../../images/quienes.png'
import mision from '../../images/mision.png'
import vision from '../../images/vision.png'

const Nosotros = () => {
    return (
        <div className='nosotrosGlobal'>
            <img 
                src={quienes}
                alt="Nosotros"
                />
            <div className='nosotros'>
            <h2> Quienes Somos</h2>
            <p> Empresa familiar con mas de 35 años de experiencia en los rubros de Herrajes y Maderas para la construcción.</p>
            </div>
            <img 
                src={mision}
                alt="Mision"
                />
            <div className='nosotros'>
            <h2> Mision</h2>
            <p> Proveer soluciones con maderas y herrajes manejando un surtido completo que permita llegar a los clientes con un servicio de alta calidad y a un precio competitivo a través de un personal altamente capacitado. </p>
            </div>
            <img 
                src={vision}
                alt="Vision"
                />
            <div className='nosotros'>
            <h2> Vision</h2>
            <p> Llegar a ser reconocidos como mejor distribuidores del distrito y buscando más expansión en el mercado.</p>
            </div>
        </div>
        
    );
}

export default Nosotros;
