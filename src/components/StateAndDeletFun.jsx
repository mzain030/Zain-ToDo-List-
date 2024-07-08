import React, { useState } from 'react'
import LearnToDo from './LearnToDo';
import MapList from './MapList';

const StateAndDeletFun = () => {
    const [toDoList,setToDoList]=useState([]);
    const addList=(inputText)=>{
        console.log("ww",inputText)
        setToDoList([...toDoList,inputText])
    }
  return (
    <div>
        <LearnToDo addList={addList}/>
        {toDoList.map((item,index)=>{
            return(
                <MapList item={item} key={index} />
            )
        })}
       
    </div>
  )
}

export default StateAndDeletFun