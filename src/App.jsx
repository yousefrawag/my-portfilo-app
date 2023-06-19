import React, { useEffect } from "react"
import Aos from "aos"
import Header from "./component/header/Header"
import Fotter from "./component/fotter/Fotter"
import './App.css'
import Hero from "./component/hero/Hero"
import Survies from "./component/survies/Survies"
import Portfilo from "./component/portfilo/Portfilo"
import { Useglobalcontext } from "./component/context/Context"
import Module from "./component/module/Module"
import Menuslider from "./component/menuslider/Menuslider"
import Contact from "./component/contact/Contact"
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  useEffect(() => {
    Aos.init()
  },[])
  return (
    <React.Fragment>

        <Header />
        <main>
        <Hero />
            <Survies />
            <Portfilo />
            <Contact />
            <Module />
            <Menuslider />
            <ToastContainer style={{zIndex:"999999999999"}} />
        </main>
           
        <Fotter />

    </React.Fragment>
  )
}

export default App

