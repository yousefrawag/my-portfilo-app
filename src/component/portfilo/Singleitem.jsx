import React from 'react'
import Aos from 'aos'
import { Useglobalcontext } from '../context/Context'
const Singleitem = ({id , imgUrl,category,title,description,technologies,siteUrl}) => {
  const {modelHandelr} = Useglobalcontext()
  return (
    <React.Fragment>
    <div className="col-lg-4 col-md-6 col-12">
                  <div className="section "
                  data-aos="fade-zoom-in"
                  data-aos-delay="20"
                  data-aos-duration='1200'
                  >

                      <img src={imgUrl} alt="" />
                    
                            <div className="opacity">
                              <button className='btn-detl' onClick={() => modelHandelr(id)}>See details</button>
                            </div>
                  </div>
    
    
    </div>
   
    </React.Fragment>
  )
}

export default Singleitem
