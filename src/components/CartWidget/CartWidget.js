import React,{useContext} from 'react'
// import carro from '../../assets/carrito.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {CartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';
import './CartWidget.css'
const CartWidget = ({iconCart}) => {
  const {totalQuantity}= useContext(CartContext)
  return (
    <Link to="/cart">
    <div className="icono-carrito" >
                <FontAwesomeIcon icon={faShoppingCart} size='2x'/>
                <span className="cantidad-prod">{totalQuantity()}</span>
            </div>
    </Link>
  )
}

export default CartWidget

