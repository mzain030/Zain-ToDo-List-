import React from 'react'
import "./styles.css";
const ToDoItemsList = () => {
  return (
    <div>
        <li className='list-item-1'>
            {/* {props.item} */}
            Item 1
            <span className='icons'>
            <i class="fa-solid fa-trash-can"></i>
            </span>
        </li>
    </div>
  )
}

export default ToDoItemsList;