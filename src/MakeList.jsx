import React from 'react'
import { useState } from 'react';

function MakeList() {
    var Zlist = [];
var chk = false;
var [ind,setInd] = useState(-1);
var [chk,setChk] = useState(false);
const uncheck = (index)=>{
setChk(true);

setInd(index);
document.getElementsByClassName("inputTask")[0].value = lists[index];

return;
}
    
    const [lists,setList] = useState(Zlist)
    console.log("Init: "+lists);
    
const getTask = () =>{
    const value = document.getElementsByClassName("inputTask")[0];
 if(chk){
    
    const myPromise = new Promise((resolve,reject) =>{
        setList(preVal=>preVal.map((currEle,index1)=>{
            
            if(ind === index1){
                currEle = value.value;
                
                console.log(value.value);
                
            }
            return currEle;
        }))
    }) 
    myPromise.then(()=>{
        console.log("Yes")
        value.value = ''
    })
    myPromise.catch(()=>{
        console.log("Yes")
    })
    
setChk(false)

    }
    else{

        

setList(lists.concat(value.value))
value.value = ''

}}



const delEle = (delTask)=>{

    
    console.log(delTask);
    
    setList((preVal)=> 
        preVal.filter((elem,index)=>{
            return index != delTask
        })
    );
}

  return (
    <>
    <div className="getInp">
    <input className="inputTask" id='inpTask' name='taskName' type="text" placeholder='Type ur Task' />
    <button  className='btn btn-light myBtn' onClick={()=>getTask()}>Submit</button>
    <div><h6>(2 clicks for deleting the task.<br></br>1 click for editing the task.)</h6></div>

    

    </div>
{
lists.map((currEle,index)=>{
 return(<button  className='btn btn-dark myBtn' onClick={()=>uncheck(index)} onDoubleClick={()=>delEle(index)}>{currEle}</button>)
        
    })
}

    
    </>
  )
}

export default MakeList