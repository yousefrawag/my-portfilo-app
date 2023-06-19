import React from 'react'
import {portfolios} from '../../assets/data/portfolioData'
import  Singleitem from './Singleitem'
import './poertfilo.css'
import Aos from 'aos'
import { Useglobalcontext } from '../context/Context'
import Catgery from './Catgery'
const Portfilo = () => {
    const {menu  ,setnextdata, nextdata,Loademordata} = Useglobalcontext()
  return (
    <section id='portfilo'>
        <div className="container">
            <div className="text-centerprof">
                <h1>Recent projects</h1>
               <Catgery />
            </div>
            <div className="row ">
               

                {
                    menu.slice(0, nextdata ).map((item) => {
                        return (
                            <Singleitem  key={item.id} {...item} />
                        )
                    })
                }           
                   
                      
        
            </div>
            <button 
            type='button'
            data-aos= 'fade-zoom-in'
            data-aos-duration='1300'
            className='btn-more'
             onClick={Loademordata}
             >
                {
                    nextdata === 15 ? "Show lese":  "Show more"
                }
             </button>
            
        </div>
      
    </section>
  )
}

export default Portfilo
