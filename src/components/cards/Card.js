import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css'


const Card = ({title, imageSource, text, url}) => {

    return (
      
      <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
           <img src={imageSource} alt="Producto" className="card-img-top "/>
        </div>
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">
            {
            text ? text : 'No existe descripción del producto'
            }
          </p>
          <a href={url} className="btn btn-outline-secondary rounded-0" rel="noopener noreferrer" target="blank">Ver el producto</a>
        </div>
        </div>
      
        
    );
}
//esto es para marcar props como requeridas o lo que deben recibir.. para eso ejecute el comando npm i prop-types y desp el import.
Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Card;

