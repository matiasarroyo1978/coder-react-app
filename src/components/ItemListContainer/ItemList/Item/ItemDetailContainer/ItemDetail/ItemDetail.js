
import React, { useState, useContext } from 'react';
import {CartContext} from '../../../../../../context/CartContext';
import ItemCount from './ItemCount/ItemCount';
import './ItemDetail.css';
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import BotonGenerico from '../../../../../../BotonGenerico/BotonGenerico';

function ItemDetail({item={}}){
    
    const [cantidad,setCantidad]=useState(0)
    const {cartList, guardarItem}= useContext(CartContext)
    console.log(cantidad,cartList)
    
    const handleCount=(cant)=>{
        
        setCantidad(cant)
        guardarItem({item: item, itemQ: cant})

        

        swal({
            title:`Agregaste ${cant} items de ${item.title}`,
            icon: 'success',
            timer:"2000",
            button: false,

        })
        
          
    };
    
    return (
        
        <div className="item-detail" key={item.id}>
                <h4>{item.title}</h4>
                <img src={item.imgDir} alt="producto seleccionado"/> 
                <p>Stock: {item.stock}</p>
                <p>Detalle: {item.description}</p>
                <p>Precio: ${item.price}</p>
                <ItemCount stock={item.stock} initial={1} onAdd={handleCount} />
                <BotonGenerico contenido={
                            <Link to={`/products`} className="text-decoration-none text-light" >
                            Seguir Comprando
                        </Link>
                        }/>
        </div>
        
    )

}

export default ItemDetail;
