import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
    return (
        <div className='nosotrosGlobal'>
            <img
                //style={{width:"30rem", height:"25rem" , float:"left"}}                
                // className="d-block w-50"
                src="images/Nosotros.png"
                alt="Nosotros"
                />
            <div className='nosotros'>
            <h2> Breve descripción</h2>
            <p> Fundada en el año 2019 por Oreste Paredes, una ferretería familiar ubicada en la ciudad de Córdoba dedicada a la comercialización y distribución de insumos tales como abrasivos, adhesivos, lubricantes, sistemas de fijación, herramientas de corte, herramientas manuales, instrumentos de medición, equipos hidráulicos, máquinas eléctricas, máquinas neumáticas, máquinas herramientas, accesorios para máquinas herramientas, elementos para matricería, elementos de protección personal y seguridad industrial, máquinas y consumibles de soldadura, entre otros.</p>
            </div>
        </div>
    );
}

export default Nosotros;
