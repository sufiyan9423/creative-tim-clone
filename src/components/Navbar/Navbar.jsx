import { useState } from 'react'
import './Navbar.css'

const Navbar = ({exapand,setExpand}) => {
  return (
    <div className='Navbar'>
         <div className={exapand?"hamburger-menu exapand":"hamburger-menu"} onClick={()=>setExpand(!exapand)}>
                <div className="bar-top"></div>
                <div className="bar-middle"></div>
                <div className="bar-bottom"></div>
        </div>
        <div className="Items">
            <div className="search">
              <input type="search" name="search" id="" placeholder='Search...' />
             <span className='magifying'>
                 <i className="fa-solid fa-magnifying-glass"></i>
             </span> 
            </div>
             
            <div className="item">
                <a href="#">  
                    <i className="fa-solid fa-earth-europe"></i>
                    <span className='arrow'>
                        <i className="fa-solid fa-angle-down"></i>
                    </span>    
                </a>
            </div>
            <div className="item">
                <a href="#">  
                    <i className="fa-solid fa-user"></i>
                </a>
            </div>
           
           
            <i className="fa-solid fa-wave-triangle"></i>
            <i className="fa-solid fa-waffle"></i>
          
            
        </div>
    </div>
  )
}

export default Navbar