import React,{useEffect,useState} from 'react';
import Item from './Item/Item.js';
import { useParams } from "react-router-dom";
import {getFirestore,collection, getDocs, query, where} from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';
import './ItemList.css';

function ItemList() {

    const [itemList, setItemList] = useState([]) // estado inicial array itemList vacio
    

    const { categoryId } = useParams() // id categoria
    const [loading, setLoading]=useState(true)
    const getProducts = () =>{
        const db=getFirestore();
        const dbQuery = collection(db, 'productos')
        const querySnapshot = categoryId ? query(dbQuery, where("categoryId", "==", categoryId)):dbQuery;
        getDocs(querySnapshot)
        .then((resp) => {
            setItemList(resp.docs.map(item =>({id:item.id, ...item.data()})))
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() =>{
                setLoading(false)
        })
        
    }
    useEffect(() => {
        setLoading(true)
        getProducts()
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



