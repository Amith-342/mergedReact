import React from 'react'
import { NavLink } from 'react-router-dom'

function home() {
  return  (
    <>
    <nav className="navbar navbar-dark bg-dark" style={{justifyContent:"center"}}>
    
    
     <NavLink exact  to="/restaurant">
    <button  className='btn btn-light myBtn' >Restaurant</button>
    </NavLink>
    <NavLink exact  to="/news">
    <button  className='btn btn-light myBtn' >News</button>
    </NavLink>
    
    <NavLink exact  to="/makelist">
    <button  className='btn btn-light myBtn' >Make List</button>
    </NavLink>    

    
    

  </nav>
    </>
  )
}

export default home