import React, {useState} from 'react';

import './ItemCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';



function ItemCount(props) {
    const {initial, stock, onAdd}=props
    const [cantidad, setCantidad] = useState(initial) // inicializo con el valor de initial
    const [onAddTo, setOnAddTo]=useState(true)

    const subirCantidad = ()=>{
        if (cantidad<stock) {
            setCantidad(cantidad+1)
        }
    }
    const bajarCantidad= ()=>{
        if (cantidad>initial) {
            setCantidad(cantidad-1) 
        }
    }



    return (
        <>
            <div>
                <div className="cad-body">
                    <button type="button" className="btn-cant" onClick={bajarCantidad}>-</button>
                        <label>{cantidad}</label>
                    <button type="button" className="btn-cant" onClick={subirCantidad}>+</button> <br/>

                    {
                    onAddTo ?
                    <button type="button" className="btn-agregar" onClick={()=> {onAdd(cantidad) ; setOnAddTo(false)}}>
                            <FontAwesomeIcon icon={faCartPlus} size="2x"/>
                            <p>Agregar al carrito</p>
                    </button>

                    :

                    <button type="button" className= "btn-terminar-compra" >
                        <Link to='/cart'className='terminar-compra'>Terminar mi compra</Link>
                    </button>
                    }



                </div>
            </div>
        </>
    )
}

export default ItemCount

