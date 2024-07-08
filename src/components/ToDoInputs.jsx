import React, { useState } from 'react'
import "./styles.css";
const ToDoInputs = (props) => {
    // const {addList}=props;
    const [inputText,setInputText]=useState('');
  return (
    <div style={{marginTop:"30px"}}>
        <input type='text'
         placeholder='Enter your todo'
         onChange={(e)=>setInputText(e.target.value)}
         value={inputText}
         className='main-input'>
         </input>
        <button className='main-button'
        onClick={()=>{
            props.addList(inputText);
            setInputText("");
        }}>+</button>
        {/* <h1>{inputText}</h1> */}
    </div>
  )   
}

export default ToDoInputs;