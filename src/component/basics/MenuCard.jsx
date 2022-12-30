import React from 'react'

function MenuCard({menuData}) {
  return   (
   <>
   {menuData.map((currEle)=>{
    return( 
    <>
     <div className="card-container">
      <div className="card">
        <div className="card-body">
        <span className="card-number card-circle subtle">{currEle.id} </span>
        <span>{currEle.what}</span>
        <h2>{currEle.food}</h2>
        <span>{currEle.description}</span>
          <div className="card-read">Read</div>
        {/* <img src={currEle.image} alt="images" className="card-media" /> */}
        </div>
      </div>
    </div> 
    </>)
   })}
   
   </>
  )
}

export default MenuCard