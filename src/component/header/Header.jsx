import React, { useState } from 'react'
import Navalinks from './Navalinks'
import './header.css'
import { Useglobalcontext } from '../context/Context'
const Header = () => {
  const {menuHandelr} = Useglobalcontext()
  const [headerstic , setheaderstic] = useState(false)
  window.onscroll  =   () =>{
    if(scrollY >= 150) {
      setheaderstic(true)
    }else {
      setheaderstic(false)
    }
  }
  console.log(headerstic)
  return (
    <header className= {headerstic ? 'header sticky-header' : 'header'}>
        <div className="container">
        <div className="parent-header">

            <div className="log">
                <div className="log-radus">
                   <p>Y</p> 
                </div>
                <p className='name'>ousef Rawag</p>
            </div>
    
            <Navalinks />
            
            <button type='button' className='butn-taik'>
            <a href="#contact">
            <i className="ri-send-plane-line"></i>Lets Taik
            </a>
            
            </button>
            <button className='menu' onClick={menuHandelr}>
            <i className="ri-menu-3-fill"></i>
            </button>
        </div>                  
        </div>
    </header>
  )
}

export default Header
