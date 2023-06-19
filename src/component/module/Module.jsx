import React from 'react'
import './module.css'
import img from '../../assets/images/portfolio-01.jpg'
import { Useglobalcontext } from '../context/Context'
const Module = () => {
    const {showModule , closeModule , getId , menu} = Useglobalcontext()
    const curentItem = menu.find((item) =>item.id === getId)
    
  return (
    <div className= {showModule? 'module module-active' :'module'} onClick={closeModule}>
            <div className="content">
           
            <button type='button' className='close_menu' onClick={closeModule}>
            <i className="ri-close-fill"></i>
            
            </button>

            
                <img src={curentItem?.imgUrl} alt={curentItem?.title} />
                <div className="about-project">
                    <h2>{curentItem?.title}</h2>
                    <p>
                        
                            {curentItem?.description}
                        
                    </p>
                    <div className="skils-container">

                    <h2>technologies</h2>
                        <ul>
                        {
                            curentItem?.technologies?.map((item) => {
                                return (
                                    <li key={item}>{item}</li>
                                )
                            })
                        }
                            
                         
                        </ul>
                    </div>
                    <button type='button'
                    className='btn-view'>
                    <a href={curentItem?.siteUrl} target="_blank" rel="noopener noreferrer">
                    Live view
                  </a>
                    </button>
                </div>
            
            </div>
    </div>
  )
}

export default Module
