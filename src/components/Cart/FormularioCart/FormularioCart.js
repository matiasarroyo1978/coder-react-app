import React, { useState, useContext } from 'react';
import {CartContext} from '../../../context/CartContext';

import swal from 'sweetalert';
import BotonGenerico from '../../../BotonGenerico/BotonGenerico';
import './FormularioCart.css';
import {getFirestore, collection, addDoc, doc, updateDoc} from 'firebase/firestore'


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
    
        const db = getFirestore()
        const data = collection(db,'order')
        addDoc(data, order)

        .then((response)=>{
            if(nombre === '' || apellido ==='' || domicilio === '' || provincia === '' || postcode === '' || telefono === '' || mail === ''){
                setError(true);
                return;}
            swal({
                title:`Compra realizada por $${costoTotal()}, Muchas gracias`,
                text:`Tu orden de compra es : ${response.id}`,
                icon:'success',
                timer: '2000',
                height: "140px"
            })
            setError(false);
            setBuyer(initialState);
            cleanList()
            return(response)
        })  
        .then((res) =>{
            console.log(res)
            cartList.forEach((product) =>{
            const query = doc(db,'productos', product.item.id)
            updateDoc(query,{
                stock: product.item.stock - product.itemQ,
            })
            
        })
        })
        .catch(err=>console.log(err))
        
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