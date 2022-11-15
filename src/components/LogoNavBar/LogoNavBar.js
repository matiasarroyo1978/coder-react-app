import React from 'react'
import logo from '../images/herrajes.png'
import './LogoNavBar.css'
const LogoNavBar = () => {
  return (
    <div className='logo-navbar'> 
      <img src={logo} alt='logo'></img>
      <h1 className='menu-title'>Herrajes Arroyo</h1>
    </div>
  )
}

export default LogoNavBar