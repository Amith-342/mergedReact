import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Axios() {
  const [news,setNews] = useState([])
 useEffect(()=>{
axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=1422cbee1b864b3291adf6e88c76751d").then((response)=>{
  setNews(response.data.articles)
})
  console.log(news)
 
 },[])
  return (
   
    <>
    
    
      {
        news.map((currEle,index)=>{
          return(
            <>
            <div id='newsId' className="card">
            <img src={currEle.urlToImage} className='newsImg' alt="..." />
            <div className="card-body">
            <h5 className="card-title">{currEle.title}</h5>
            <p className="card-text">{currEle.description}</p>
            {/* <a href="#"  className="btn btn-primary">Go somewhere</a> */}
        
          </div>
          </div>
            </>
          )
            
        })
      }
  

    
    
    
    </>
  )
}

export default Axios