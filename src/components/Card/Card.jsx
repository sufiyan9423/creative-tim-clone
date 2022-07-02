import  './Card.css'
import  Chart  from '../Chart/Chart.jsx'
import {  monthArray, ShipedOptions } from '../../Data/Data';
import CardChart from '../CardChart/CardChart';





const Card = ({ type }) => {
  // const ctx = canvas.getContext("2d")
    // const gradientBg=ctx.createLinearGradient(0,0,0,400)
    // gradientBg.addColorStop(0,"lime");
    // gradientBg.addColorStop(0.5,'green');
    // gradientBg.addColorStop(1,'black');
   // console.log(type);
    let data;
      // const dataChart=()=>{
         
      //      return data;
      // }
      switch (type) {
        case "global":
          data = {
            title: "Global sales",
            heading: "Shipped Products",
            footer: "Just Updated", 
            dropdown:true,   
            icon:"fa-solid fa-rotate", 
            chartType:"Line",      
          };      
          break;
          case "sales":
            data = {
              title: "2020 Sales",
              heading: "All products",
              footer: "Just Updated",       
              dropdown:true,  
              icon:"fa-solid fa-rotate",
              chartType:"Line",    
            };      
            break;
            case "email":
              data = {
                title: "Email Statistics",
                heading: "24 Hours Performance",
                footer: "Last 7 days",
                dropdown:false, 
                icon:"fa-solid fa-stopwatch",
                // <i class=""></i>
                chartType:"Bar",            
              };      
              break;
    }
  return (
    
        <div className='Card'>
        <div className="card-heading">
            <h5>{data.title}</h5>
            <h4>{data.heading}</h4>
           {data.dropdown && <div className="dropdown">
                <button type='button'>
                    <i className='fa-solid fa-gear'></i>
                </button>
            </div>}
        </div> 
        <div className="card-body" >
                <div className="chart" >
                   {/* <Chart  chartData={data}  options={ShipedOptions}  />  */}
                   <CardChart  type={type} chartType={data.chartType}/>
               
                </div>
        </div> 
        <div className="card-footer">
            <div className="stats">
            <i className={data.icon}></i>
               {data.footer}
            </div>
        </div>
    </div>

    
   
  )
}

export default Card