import React, { useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import {ImCross} from 'react-icons/im';
import "./Cart.css";
import FormularioCart from './FormularioCart/FormularioCart';
import BotonGenerico from '../../BotonGenerico/BotonGenerico';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


function Cart() {

    const {cartList,removeItem,costoTotal,cleanList}= useContext(CartContext)    
    return (
        <>
        
        <h2 className='texto-h2'>CARRITO DE COMPRAS</h2>
        {cartList.length === 0?
            <p className='texto-p'>El carrito está vacio</p>
        :
      
        <div className='container d-grid'>
            <Button display="flex" justify-content="center" style={{marginTop:"2rem"}} variant="danger"  onClick={cleanList}> Vaciar el Carrito </Button>
            <table>
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Total</th>
                </tr>
                </thead>
                <tbody>
                {cartList.map(item => 
                    <tr key = {item.item.id}>
                        <td><img src={item.item.imgDir} width='120rem' height='140rem' alt="" /><p>{item.item.title}</p></td>
                        <td>{item.itemQ}</td>
                        <td>${item.item.price*item.itemQ}</td>
                        <td><ImCross className="remove d-flex justify-content-center"onClick={()=>{removeItem(item)}}/></td> 
                    </tr>
                )}                        
                </tbody>
            </table>
            <p className="total">{`Total a pagar : $${costoTotal()}`} </p> 
            <BotonGenerico contenido={
                            <Link to={`/products`} className="text-decoration-none text-light" >
                            Seguir Comprando
                        </Link>
                        }/>
            <div className="titulo-form">
                <h3>Ingresá tus datos para enviar tu pedido</h3>
                <FormularioCart/>
                
            </div>
        </div>
        }
        </>
        
    )
}
export default Cart