import { useState } from 'react'
import  './Task.css'

const Task = ({task}) => {
  const [checked,setChecked]=useState(task.checked)
  const handleChange=()=>{
    setChecked(!checked)
  
  }
  return (
    <>
        <div className="right">
            <label className="mainlabel">
                <input type="checkbox" name="checkbox" id="" checked={checked} onChange={()=>handleChange()}  />
                <span className='geekmark'></span>
            </label>    
             <p>{task.text}</p> 
        </div>
        <div className="left">
            <button className='edit'>
              <i className="fa-solid fa-pen-clip"></i>
              <span className="popup">Edit task</span>
            </button>
            
            <button className='remove'>
              <i className="fa-solid fa-xmark"></i>
              <span className="popup">Remove</span>      
            </button>
           
        </div>
    </>
  )
}

export default Task