 import React, { useState ,useRef } from 'react'
 import emailjs from '@emailjs/browser'
import './contact.css'
import { toast } from 'react-toastify';
import Aos from 'aos';
const Contact = () => {

const [formData, setFormData] = useState({
  name:'',
  email:'',
  company:'',
  massage:'',
  phone:"",
  File:[]
})
const [mapLoaded  , setMapload] = useState(false)
const handelmap = () => {
  setMapload(true)
}
  const inputHandelr = (e) => {
      const id = e.target.id;
      let value = e.target.value;
      if(e.target.type === 'File') {
        let file =  e.target.files[0]
        value = URL.createObjectURL(file)
      }
     

      setFormData({...formData,[id]:value})
     
  }
  const handelsumit = (e) => {
    e.preventDefault()
    if (formData.email.trim() !== '' && formData.name.trim() !== '' && formData.massage.trim() !== '' && formData.phone.trim() !== '' ){
      emailjs.send("service_xcr9kal", "template_0znlnni", formData, "MvvmMcHoZ4pfShaNN")
      .then((response) => {
        console.log("Email sent:", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
      setFormData({
        name: '',
        email: '',
        company: '', // fix the property name here
        massage: '',
        phone: '',
        File: []
      });
    toast.success('your massage has been sending')
    }else {
      toast.error('you moust fuil inputs')
    }
    
   
  } 
  return (
    <section id='contact' className='contact'>
        <div className="container">

            <h1  
            data-aos='fade-zoom-in'
            data-aos-duration= '1500'
            data-aos-delay="20"
            > Contact me</h1>
                <div className="row">
                  
                        <div className="col-lg-6 col-md-6  col-12">
                              <div className="map"
                              data-aos='fade-zoom-in'
                              data-aos-duration= '1500'
                              data-aos-delay="20"
                              >
                                      <iframe
                                      title='google-maps'
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110550.24188796885!2d31.27204504552288!3d30.01691127910412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458469235579697%3A0x4e91d61f9878fc52!2z2KfZhNis2YrYstip2Iwg2YLYs9mFINin2YTYudmF2LHYp9mG2YrYqdiMINin2YTYrNmK2LLYqQ!5e0!3m2!1sar!2seg!4v1683844694792!5m2!1sar!2seg"
                                      width="800"
                                      height="500"
                                      style={{ border: 0 }}
                                      allowFullScreen
                                      referrerPolicy="no-referrer-when-downgrade"
                                    
                                    ></iframe>
                              
                                
                                                  
                              </div>
                        
                        </div>
                      <div className="col-lg-6 col-md-6  col-12">
                            <form  onSubmit={handelsumit} 
                            data-aos='fade-zoom-in'
                            data-aos-duration= '1500'
                            data-aos-delay="20"
                            >
                            <div className="row">

                                   <div className="col-12">
                                      <div className="massage">
                                            <textarea name="massage" id="massage" cols="30" rows="10" value={formData.massage} placeholder='How I can help you?' onChange={inputHandelr}></textarea>                                      
                                      </div>
                                   
                                   </div>
                                   <div className="col-12">

                                      <div className="file">


                                          upload your file<input id='File'   type="File" onChange={inputHandelr} value={formData.File} multiple max={3}/>
                                      
                                      </div>
                                
                                  </div>
                                  <div className="col-12">

                                      <div className="row">
                                          <div className="col-lg-6  col-12">
                                                <div className="input-container">
                                                        <input onChange={inputHandelr} value={formData.name} type="text" id='name' placeholder='Full name' />
                                                
                                                </div>
                                          
                                          </div>      
                                    <div className="col-lg-6  col-12">
                                          <div className="input-container">
                                                  <input onChange={inputHandelr} value={formData.company} type="text" id='company' placeholder='Company' />
                                          
                                          </div>
                                    
                                    </div>
                                <div className="col-lg-6  col-12">
                                    <div className="input-container">
                                            <input onChange={inputHandelr} value={formData.email} type="email" id='email' placeholder='Work email' />
                                    
                                    </div>
                              
                              </div> 
                          <div className="col-lg-6  col-12">
                              <div className="input-container">
                                      <input onChange={inputHandelr} value={formData.phone} type="text" id='phone' placeholder='Phone' />
                              
                              </div>
                        
                        </div>                                                              
                                      
                                      </div>
                                
                                  </div>
                                            
                                <div className="col-12">
                                <button className='btn' type='submit'> submit</button>

                                </div>
                              
                                    
                            
                            </div>
                              
                                    </form>
                      

                      
                      </div>
                        
                        
                       
                </div>
        </div>
    </section>
  )
}

export default Contact
