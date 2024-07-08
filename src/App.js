import logo from './logo.svg';
import './App.css';
import ToDoInputs from './components/ToDoInputs';
import { useState } from 'react';
import MapItemsToDo from './components/MapItemsToDo';
import LearnToDo from './components/LearnToDo';
import StateAndDeletFun from './components/StateAndDeletFun';
function App() {
  const [toDoList,setToDoList]=useState([]);
const addList=(inputText)=>{
  console.log(inputText)
  if(inputText!=="")
  setToDoList([...toDoList,inputText])
}
const deleteListItem=(key)=>{
  let newToDoListData=[...toDoList];
  newToDoListData.splice(key)
  setToDoList([...newToDoListData]);
}
  return (
    <div className='App'>
    <ToDoInputs addList={addList}/>
<h1>TODO</h1>
<hr></hr>
{toDoList.map((item,index)=>{
  return(
    <MapItemsToDo key={index} index={index} item={item} deleteitem={deleteListItem}/>
  )
})}
<hr></hr>
{/* <LearnToDo/> */}
<StateAndDeletFun/>
  
    </div>
  );
}

export default App;
