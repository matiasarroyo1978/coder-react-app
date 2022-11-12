import React from 'react'
import Cards from '../../cards/Cards'
import Carousel from '../../Carousel/Carousel'
import './Home.css'
const Home = () => {
  return (
    <div>
        <h1 className="message"> Bienvenido a Herrajes Arroyo</h1>
        <Carousel/>
        <Cards/>
    </div>
  )
}

export default Home