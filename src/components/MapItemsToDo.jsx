import React from 'react'

const MapItemsToDo = (props) => {
  return (
    <center>  
      
        <li className='list-item-1'>
            {props.item}
            <span className='icons'>
            <i class="fa-solid fa-trash-can"
            onClick={()=>{
                props.deleteitem(props.index)
            }}
            ></i>
            </span>
        </li>
    </center>
  )
}

export default MapItemsToDo;