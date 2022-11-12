import React,{useEffect,useState} from 'react';
import Item from './Item/Item.js';
import { useParams } from "react-router-dom";
import {getFirestore} from '../../../firebase/firebaseConfig';


import Spinner from 'react-bootstrap/Spinner';
import './ItemList.css';


function ItemList() {

    const [itemList, setItemList] = useState([]) // estado inicial array itemList vacio
    

    const {categoryId} = useParams() // id categoria
    const [loading, setLoading]=useState(true)
    
    useEffect(() => {
        setLoading(true)

            const db = getFirestore()
           
            console.log(db)
            const itemsCollection = db.collection('items')
            
            const dbQuery = categoryId ?  itemsCollection.where('categoryId', '==', categoryId) : itemsCollection
            dbQuery.get().then(resp => {
                console.log(resp);
                if (resp.size === 0) {
                    console.log('No hay productos')
                }else{
                   
                setItemList(resp.docs.map(item=> ({id: item.id, ...item.data()}) ))}
                
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])



    return(
        
        <div className="row">
            {loading && <Spinner animation="border" style={{color: "rgba(204,100,28,100)"}} /> /*loading*/ }
            
            {!loading &&itemList.map((item) => (   //recorro los objetos dentro de mi estado "itemList" y para cada objeto lo ingreso en compoente Item
                
                <div key={item.id} className="list-cont col-md-3 col-lg-4">
                    
                    <Item  prodData= {item}/>
                </div>
            ))} 
        </div>
        
        )
    
    
    
}


export default ItemList
