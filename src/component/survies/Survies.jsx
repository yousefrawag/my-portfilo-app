import React from 'react'
import './servies.css'
import Aos from 'aos'
import {skils} from '../../assets/data/portfolioData'
const Survies = () => {
  return (
    <section id='servies'>
      <div className="container">
            <div className="text-center"
            data-aos="fade-up"
            data-aos-duration='1200'  
            >
          
          
            <h1>What do I help</h1>
             
            </div>
        <div className="temline"
        data-aos="fade-up"
        data-aos-duration='1200' 

        >


                    {
                        skils.map((skil) => {
                            return (
                                <div className="checkpoint" key={skil.id}>
                 
                                <div>
                                <i className={skil.icon}></i>
                                    <div className="content-surves">
        
                                    <h3>{skil.head}</h3>
                                    <p>{skil.descrp}</p>
        
                                    </div>
                                    
                                   
                                </div>
                        </div>
                            )
                        })
                    }


                
              
           
       
        
    </div>
      </div>
    </section>
  )
}

export default Survies
