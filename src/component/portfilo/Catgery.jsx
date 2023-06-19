import React from 'react'
import Aos from 'aos'
import {portfolios} from '../../assets/data/portfolioData'
import { Useglobalcontext } from '../context/Context'
const Catgery = () => {
    const catgers  = [ 'All',...new Set(portfolios.map((item) => item.category))]
    const {fliltItems , catgery} = Useglobalcontext()
  return (
    <div className="row gap"
    data-aos="fade-zoom-in"
    data-aos-delay="20"
    data-aos-duration='1200'
    >
    {
        catgers.map((item) => {
            return (
              <div className="col-4" key={item}>
              <button className={catgery === item? 'btn-catg active ': 'btn-catg '}
               
              type='button'
              onClick={() => fliltItems(item)}
              
              >{item}</button>
              
              </div>
              
            )
        })
    }
   
 
</div>
  )
}

export default Catgery
