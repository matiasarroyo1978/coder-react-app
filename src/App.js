
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemListContainer/ItemList/Item/ItemDetailContainer/ItemDetailContainer';
import Contacto from './components/pages/Contacto/Contacto';
import Nosotros from './components/pages/Nosotros/Nosotros';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContextProvider from './context/CartContext';
import Cart  from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import './App.css';
import Home from './components/pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return(
    <div>
      
    <CartContextProvider>
    <BrowserRouter>
    
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<ItemListContainer greeting='TODOS NUESTROS PRODUCTOS' />} />
      <Route path='/categoria/:categoryId' element={<ItemListContainer />}  />
      <Route path='/item/:id' element={<ItemDetailContainer />}  />
      <Route path='/cart' element={<Cart />} />
      <Route path='/contacto' element={<Contacto/>} /> 
      <Route path='/nosotros' element={<Nosotros/>} />
      
      
    </Routes>
    
    
    <Footer/>
    
  </BrowserRouter>
  </CartContextProvider>
  </div>
  );

}

export default App;
