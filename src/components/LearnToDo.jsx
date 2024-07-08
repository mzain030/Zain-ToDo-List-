import React, { useState } from 'react'

const LearnToDo = (props) => {
    const [inputText,setInputText]=useState("");
  return (
    <div>
        <input type='text' placeholder='Enter todo ' 
        onChange={(e)=>setInputText(e.target.value)}
        value={inputText}
        ></input>
        <button type='button' 
        onClick={()=>{
props.addList(inputText);
setInputText("");
        }}>+</button>
        {/* <h1>{inputText}</h1> */}
    </div>
  )
}

export default LearnToDo