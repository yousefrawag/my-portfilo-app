import React from 'react'
import './footer.css'
import {follow_me} from '../../assets/data/portfolioData'
const Fotter = () => {
  return (
    <footer className='footer' >
          <div className="container">
          <div className="row">
          <div className="col-lg-6 col-12">
                  <div className="content-fotter">
                      <h2>Do you wnat To make beautifls products ?</h2>
                  </div>
          </div>
                <div className="col-lg-6 col-12">
                      <div className="container-flow-me">
                              <p>

                              Are you looking to create stunning and captivating products that leave a lasting impression? Look no further than our expert team of designers and creators. We specialize in delivering exceptional results that exceed your expectations and bring your vision to life. Contact me today to see how we can help you turn your ideas into beautiful, high-quality products     
                              </p>
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
               
           
          
          </div>
     
         
        </div>
        <div className="footer-end">
              <div className="container">
                  <div className="row paren">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="log">
                                <div style={{background:'#8873ef'}} className="log-radus">
                                  <p style={{color:'white'}}>Y</p> 
                                </div>
                                <p className='name' style={{color:'white'}}>ousef Rawag</p>
                          </div>
                  </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">

                            <div className="copy-right">
                                <p> Copyright 2023 by Yousef Rawag </p>
                            </div>
                    
                    </div>
            
              </div>              
              
              </div>
      
</div>
        
  </footer>
  )
}

export default Fotter
