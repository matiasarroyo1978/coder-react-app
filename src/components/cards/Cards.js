import React from 'react'
import Card from './Card';

import producto1 from '../images/5002.jpeg';
import producto2 from '../images/granero.jpeg';
import producto3 from '../images/vigas.jpeg';
import './Card.css';
const cards = [
    {
        id: 1,
        title: 'CERRADURA KALLAY 5002.',
        image: producto1,
        text: 'CERRADURA DE SEGURIDAD KALLAY MODELO 5002 PARA PORTON O PUERTA CORREDIZA PARANTE ANGOSTO.',
        url: 'https://www.kallay.com/productos?modelo=5002'   
    },
    {
        id: 2,
        title: 'KIT PARA PUERTAS TIPO GRANERO.',
        image: producto2,
        text: 'Kit Para puertas tipo establo de aplicar. Soporta 90kg por hoja. Para puertas hasta 40mm de espesor.',
        url: 'https://metalurgicaruedamas.com.ar/productos/kit-mr-pampa/' 
    },
    {
        id: 3,
        title: 'VIGAS MULTILAMINADAS DE PINO.',
        image: producto3,
        text: 'Tirantes y Vigas multilaminadas de diferentes espesores y medidas hasta 12 mts. de largo. ',
        url: 'https://www.aserraderosauer.com.ar/productos/vigas-multilaminadas/' 
    },
]

const Cards = () => {
    return (
        <div> 
            <h2 className="title-prod-dest d-flex justify-content-center texto"> Productos Destacados </h2>
        <div className="container d-flex justify-content-center align-items-center h-100 ">
            
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                        <Card 
                        title={card.title}
                        imageSource={card.image}
                        text= {card.text}
                        url={card.url}
                        />
                    </div>
                    ))
                }

            </div>
            </div>
        </div>
    );
}

export default Cards;
