
import { useContext, useState } from 'react'
import { BackgroundContext } from '../../Context/BackgroundContext/BackgroundContext'
import { navData } from '../../Data/Data'
import  './Sidebar.css'

const Sidebar = ({exapand,setExpand}) => {
  const [selected,setSelected]=useState(0)
 
  const {background}=useContext(BackgroundContext)
 // console.log(background);
  // console.log(exapand);
  return (
    <div className={exapand?"Sidebar exapand":"Sidebar"} data-color={background}>
            <div className="logo">
                <img src="https://demos.creative-tim.com/now-ui-dashboard-react/static/media/logo-white.eec7c7f6.svg" alt="react-logo" />
                <span>CREATIVE TIM</span>
            </div>
            <div className="nav">

              {navData.map((item,i)=>{
                    return(
                      <div className="navItem" key={i} onClick={()=>setSelected(i)}>
                          <a href='#' className={selected===i?"navLink active":"navLink"}  >
                            <i className={item.icon}></i>
                            <span>{item.heading}</span>
                        </a>
                    </div>
                    )
              })}
                 
               
            </div>
    </div>
  )
}

export default Sidebar