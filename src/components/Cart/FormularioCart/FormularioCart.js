import React, { useState, useContext } from 'react';
import {CartContext} from '../../../context/CartContext';
import db from '../../../firebase/firebaseConfig';
import swal from 'sweetalert';
import BotonGenerico from '../../../BotonGenerico/BotonGenerico';
import './FormularioCart.css';



function FormularioCart() {
    const {cartList,costoTotal,cleanList}= useContext(CartContext)  
    const [buyer, setBuyer] = useState(initialState)
    const order = {buyer, item:cartList, totalCompra: `$${costoTotal()}`} // buyer:buyer, 
    
    // State para mostrar el error de la validación
    const [error, setError] = useState(false);   

    // Extraer los valores
    const {nombre, apellido, domicilio, provincia, postcode, telefono, mail} = buyer;

    const handlerChange = (evt)=>{
        evt.preventDefault()
        
        setBuyer({
            ...buyer,
            [evt.target.name]: evt.target.value,
        })
    }
    const handlerSubmit=(evt)=>{
        evt.preventDefault()
        
        // const db = getFirestore()
        db.collection('order').add(order)

        .then(({id})=>{
            if(nombre === '' || apellido ==='' || domicilio === '' || provincia === '' || postcode === '' || telefono === '' || mail === ''){
                setError(true);
                return;}
            swal({
                title:`Compra realizada por $${costoTotal()}, Muchas gracias`,
                text:`Tu orden de compra es : ${id}`,
                icon:"success",
                height: "340px"
            })
            setError(false);
            setBuyer(initialState);
            //actualizar el stock del producto
            
        })
        .catch(err=>console.log(err))
        cleanList()
    }

    return (
        <>
        {error ? <p className="alerta-error">Todos los campos son obligatorios </p>: null}

            <form className='formulario-comprador'
                        onSubmit={handlerSubmit}
                        onChange={handlerChange}
                    >
                        <input 
                            type='text'
                            placeholder='Nombre' 
                            name='nombre'
                            value={buyer.nombre}
                            onChange={handlerChange}
                        />
                        <input 
                            type='text' 
                            placeholder='Apellido' 
                            name='apellido'
                            value={buyer.apellido}
                            onChange={handlerChange}
                        />
                        <input 
                            type='text' 
                            placeholder='Domicilio' 
                            name='domicilio'
                            value={buyer.domicilio}
                            onChange={handlerChange}
                        />
                        <input 
                            type='text' 
                            placeholder='Provincia' 
                            name='provincia'
                            value={buyer.provincia}
                            onChange={handlerChange}
                        />
                        <input 
                            type='text' 
                            placeholder='Codigo Postal' 
                            name='postcode'
                            value={buyer.postcode}
                            onChange={handlerChange}
                        />
                        <input 
                            type='tel' 
                            placeholder='Telefono' 
                            name='telefono'
                            value={buyer.telefono}
                            onChange={handlerChange}
                        />
                        <input 
                            type='email' 
                            placeholder='E-mail' 
                            name='mail'
                            value={buyer.mail}
                            onChange={handlerChange}
                        />
                        <div>
                            <BotonGenerico contenido ={ "Realizar compra"}/>
                        </div>
                        
                    </form>
                    
        </>
    
    )
}

export default FormularioCart

const initialState ={
    nombre:'',
    apellido:'',
    domicilio:'',
    provincia:'',
    postcode:'',
    telefono:'',
    mail:'',
} 