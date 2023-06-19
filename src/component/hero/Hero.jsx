import React from 'react';
import msg5590880408 from '../../assets/images/msg5590880408-6433.png'
import {follow_me} from '../../assets/data/portfolioData'
import CountUp from 'react-countup';
import './hero.css'
const Hero = () => {
  return (
    <section className='hero'  id='about'>
      <div className="container">
        <div className="row ">
          <div className="col-lg-4  col-8">
                  <div className="content-hero">
                    
                  <h5
                    data-aos='fade-right'
                    data-aos-duration= '1500'
                >
                Hello Welcom
                  </h5>
                <h1
                data-aos='fade-up'
                data-aos-duration= '1500'
                >
                Im Yousef Rawag <br /> Frontend Developer
                </h1>
                <div 
                className="link-email"
                data-aos='fade-up'
                data-aos-duration= '1800'
                data-aos-delay = '200'
                >
                    
                    <button type='button' className='here-me'>

                      <a href="#contact" className='email'>
                          <i className="ri-mail-line"></i>Here me
                      </a>

                    </button>
                    
                    <a href="#portfilo" className='porf'>
                        see portfilo
                    </a>
                </div>

                <div className="text"
                data-aos='fade-left'
                data-aos-duration= '1500'
                >

                    <span><i className="ri-apps-line"></i></span>
                    <p> I'm Youse Rawag, a frontend developer with experience in React My portfolio features a collection of visually appealing and user-friendly websites I've created for various clients. Feel free to browse through my work and contact me if you have any questions or are interested in working together</p>
                  
                </div>
                <div className="follw-me"
                data-aos='fade-up'
                data-aos-duration= '1500'
                
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
          
            <div className="col-lg-4  col-4">

           
            <div className="image-hold ">
            <img src={msg5590880408} alt="image" className='img-fluid'  />  

            </div>
 

            </div>
              <div className="col-lg-4  col-12 ">
                      <div className="count-countiner">
                      <div className="row">
                      <div className="col-lg-12 col-md-4 col-sm-6 col-6">
      
                            <div className="hold-count">
                                <h2 style={{fontSize:"30px"}}>
                                  <CountUp  start={0} end={2} duration={5} suffix='+'/>
                                </h2>
                                <h2 className='head'> Freelance experience</h2>
                          </div>
                      </div>
                   <div className="col-lg-12 col-md-4 col-sm-6 col-6">
                              <div className="hold-count">
                                    <h2 style={{fontSize:"30px"}}>
                                      <CountUp  start={0} end={100} duration={5} suffix='+'/>
                                    </h2>
                                    <h2> Success rate</h2>
                            </div>
                   </div>
                          <div className="col-lg-12 col-md-4 col-sm-6 col-6">
                                <div className="hold-count">
                                      <h2 style={{fontSize:"30px"}}>
                                        <CountUp  start={0} end={30} duration={5} suffix='+'/>
                                      </h2>
                                      <h2> Happy clients</h2>
                              </div>
                          
                          </div>
                          <div className="col-lg-12 col-md-4 col-sm-6 col-6">
                              <div className="hold-count">
                                    <h2 style={{fontSize:"30px"}}>
                                      <CountUp  start={0} end={70} duration={5} suffix='+'/>
                                    </h2>
                                    <h2> Projects completed</h2>
                            </div>
                          
                          </div>
                 
      
                </div>              

                      </div>
          
              
              </div>
           
            
        </div>
      </div>
    </section>
  )
}

export default Hero
