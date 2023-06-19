import React from 'react'
import './menuslider.css'
import reduce from '../../assets/images/reduce.png'
import { Useglobalcontext } from '../context/Context'
import { navalinks } from '../../assets/data/portfolioData'

const Menuslider = () => {
    const {closeMenu,showMenu} = Useglobalcontext()
  return (
    <div className={showMenu ? 'menuslider active_menu': 'menuslider'}>
   
     <div className="content">
     <button type='button' className='close_menu' onClick={closeMenu}>
     <i className="ri-close-fill"></i>
     
     </button>
    
          <div className="log">
                  <div className="log-radus">
                      <p>Y</p> 
                  </div>
                  <p className='name'>ousef Rawag</p>
        </div>
        <div className="image-raduce">
            <img src={reduce} alt="" className='img-fluid' />
        </div>
        <div className="navalinks">
        {
            navalinks.map((link) => {
                const {id  , text , url} = link
                return (
                    <ul key={id} className='nav-container'>
                            <li onClick={closeMenu}>
                                <a href={url}>{text}</a>
                            </li>
                    </ul>
                )
            })
        }
    </div>
    <div className="follw-me"
                
                
                >
                    <h4> Follow me</h4>
                    <div className="social_icons">
                    <ul className="wrapper">
                         
                          <a className="icon facebook"  target="_blank" href='https://www.facebook.com/yousef.rawag/'>
                            <span className="tooltip">Facebook</span>
                            <span>  <i className="ri-facebook-circle-line"></i> </span>
                          </a>
                          <a className="icon instagram"  target="_blank" href="https://www.instagram.com/yousefrawag/?igshid=OTk0YzhjMDVlZA%3D%3D&fbclid=IwAR2k1ruh8b6t5wxAES2pa601UTPSI5jiGjcatMvUL66RiLdwZurc9PmzgYo">
                            <span className="tooltip">Instagram</span>
                            <span>  <i className="ri-instagram-line"></i> </span>
                          </a>
                          <a className="icon github"  target="_blank" href='https://www.linkedin.com/feed/'>
                            <span className="tooltip">Linkedin</span>
                            <span>  <i className="ri-linkedin-line"></i> </span>
                          </a>

                </ul>
                          </div>
                </div>
     </div>
      
    </div>
  )
}

export default Menuslider
