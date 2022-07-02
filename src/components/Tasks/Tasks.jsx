import { tasks } from '../../Data/Data'
import Task from '../Task/Task'
import './Tasks.css'

const Tasks = () => {
   
  return (
    <div className='Tasks-card'>
        <div className="tasks-head">
            <h3>Backend Development</h3>
            <h1>Tasks</h1>
        </div>
        <div className="tasks-body">
        {tasks.map((task,i)=>{
            return(
                <div className="task" key={i}>
                    <Task task={task} />
                 </div>
            )
        })}   
          
        </div>
        <div className="tasks-footer">
            <i className="fa-solid fa-rotate"></i>
            Upated 3 minutes ago
        </div>

    </div>
  )
}

export default Tasks