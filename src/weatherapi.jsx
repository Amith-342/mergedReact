import React from 'react'
import { useState } from 'react';

function Wapi() {
    const getTask = (city)=>{
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}`
    }

  return (
    <>
    <div className="getInp">
    <input className="inputTask" id='inpTask' name='taskName' type="text" placeholder='Type ur Task' />
    <button  className='btn btn-light myBtn' onClick={()=>getTask()}>Submit</button>
    <div><h6>(2 clicks for deleting the task.<br></br>1 click for editing the task.)</h6></div>

    

    </div>


    
    </>
  )
}

export default Wapi