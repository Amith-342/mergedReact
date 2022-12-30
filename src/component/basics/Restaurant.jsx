import React from 'react'
import Menu from "./Menuapi"
import MenuCard  from './MenuCard'
import "bootstrap"
import { useState } from 'react'
import Navbar from './Navbar'



const Restaurant = () => {

  const [menuData,setMenuData] = useState(Menu);
const filterAll = (clickEle) =>{
  if(clickEle === "All"){
setMenuData(Menu);
  }
  else{
    const filterEle = Menu.filter((currEle)=>{
  
      return  currEle.what === clickEle
    })
    
    setMenuData(filterEle);
    console.log("Menu: "+Menu[0].what);
  }


}

  return(<>
  
  <Navbar filterAll = {filterAll} />
  <MenuCard menuData={menuData} />
  
  </>)
  
 
}

export default Restaurant



