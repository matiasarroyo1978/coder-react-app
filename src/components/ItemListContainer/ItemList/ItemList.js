// import React,{useEffect,useState} from 'react';
// import Item from './Item/Item.js';
// import { useParams } from "react-router-dom";

// import Spinner from 'react-bootstrap/Spinner';
// import './ItemList.css';


// function ItemList() {
   
// const [items,setItems] = useState([]);
// const categoryId = useParams();
// const [loading, setLoading] = useState()

// const getData=()=>{
//         fetch('datos.json'
//         ,{
//           headers : { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//            }
//         }
//         )
//           .then(function(response){
//             console.log(response)
//             return response.json();
//           })
//           .then(function(myJson) {
//             console.log(myJson);
//             if(myJson===0){
//                 console.log('No hay productos')
//             }else{
//                 setItems(myJson)
//             }
            
//             })
//             .finally(() =>{
//             setLoading(false)
// })   
// }
  
// useEffect(()=>{
//   setLoading(true)
//     getData()
// },[categoryId])


//     return(
//         <div className="row">
//         {loading && <Spinner animation="border" style={{color: "rgba(204,100,28,100)"}} /> /*loading*/ }
        
//         {!loading &&items.map((item) => (   //recorro los objetos dentro de mi estado "itemList" y para cada objeto lo ingreso en compoente Item
            
//             <div key={item.id} className="list-cont col-md-3 col-lg-4">
                
//                 <Item  prodData= {item}/>
//             </div>
//         ))} 
//         </div>
        
//         );
    
    
    
// };
// export default ItemList
import React,{useEffect,useState} from 'react';
import Item from './Item/Item.js';
import { useParams } from "react-router-dom";
import {getFirestore,collection, getDocs, query, where} from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';
import './ItemList.css';

function ItemList() {

    const [itemList, setItemList] = useState([]) // estado inicial array itemList vacio
    

    const {categoryId} = useParams() // id categoria
    const [loading, setLoading]=useState(true)

    useEffect(() => {
        // setLoading(true)

            const db = getFirestore();
            
            const dbQuery = collection(db,'productos')
            console.log(dbQuery.firestore)
            if(categoryId){
                const dbQueryFilter = query(dbQuery, where('categoryId','==',categoryId))
                getDocs(dbQueryFilter)
                .then(res => setItemList(res.docs.map(product =>({id:product.id, ...product.data()}))))
            }else{
                getDocs(dbQuery)
                .then(res => setItemList(res.docs.map(product =>({id:product.id, ...product.data()})))) 
            }
           
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



