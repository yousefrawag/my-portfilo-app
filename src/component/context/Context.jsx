import React , { createContext , useContext , useState} from 'react'
import {portfolios} from '../../assets/data/portfolioData'
const Appcontext = createContext()
export const Approviedr = ({children }) => {
  const [catgery, setgatgery] = useState('All')
  const [menu , setmenu] = useState(portfolios)
  const [nextdata, setnextdata] = useState(6)
  const [showModule, setshowmodule] = useState(false)
  const [showMenu, setshowmenu] = useState(false)
  const [getId, setgetId] = useState(null)

const closeModule = () => {
  setshowmodule(!showModule)
}
  const modelHandelr = (id) =>{
    setshowmodule(!showModule)
    setgetId(id)
  }
  const closeMenu = () => {
    setshowmenu(!showMenu)
}
  const menuHandelr = () =>{
    setshowmenu(!showMenu)
  }  
  const Loademordata = () =>{
    if(nextdata === 15) {
      return setnextdata(6)
    }
   return setnextdata(nextdata + 3)
  }  
const fliltItems = (catgery) => {
  setgatgery(catgery)
  if(catgery === 'All') {
    return setmenu([...portfolios.slice( 0 , portfolios.length)])
  }
  const newData = portfolios.filter((item) => item.category === catgery)
  return setmenu(newData)
}
  return (
    <Appcontext.Provider value={{

        catgery,
        fliltItems,
        menu,
        nextdata,
        Loademordata,
        setnextdata,
        showModule,
        setshowmodule,
        getId,
        setgetId,
        modelHandelr,
        closeModule,
        closeMenu,
        showMenu,
        menuHandelr
        

    }}>
      {
        children 
      }
    </Appcontext.Provider>
  )
}
export const Useglobalcontext = () =>{
    return useContext(Appcontext)
}


