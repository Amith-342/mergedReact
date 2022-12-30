import React from 'react'
import Menu from "./Menuapi"

const uniqueList = ["All","BreakFast","Lunch","Dinner"];

function Navbar({filterAll}) {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark" style={{justifyContent:"center"}}>
    
    {
      uniqueList.map((currEle)=>{
    return(<button  className='btn btn-light myBtn' onClick={()=>filterAll(currEle)}>{currEle}</button>)
      })
    }

  </nav>
    </>
  )
}

export default Navbar