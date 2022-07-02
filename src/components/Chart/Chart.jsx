import { Line } from 'react-chartjs-2'
import reChart from 'chart.js/auto';
import  './Chart.css'
import { useEffect, useRef, useState } from 'react';

import {  monthArray, options } from '../../Data/Data';

const Chart = ({}) => {
  const refChart=useRef();
  let [gradientBg,seGradientBg]=useState({}); 
  useEffect(() => {
      function init(){
        const canvas=refChart.current.canvas;
        // console.log(canvas);
        const ctx = canvas.getContext("2d")
        gradientBg=ctx.createLinearGradient(0,0,0,180)
        gradientBg.addColorStop(0, "rgba(253,255,255,0.2)");
        gradientBg.addColorStop(0.5, "rgba(255,255,255,0.1)");
        gradientBg.addColorStop(1, "rgba(253,255,255,0.0001)");
        seGradientBg(gradientBg);

      }
        init();
    
  }, [])
  
  const data = {
    labels:monthArray,
    datasets: [{
      label: 'DATA',
      data: [50, 150,100, 190,130,90,150,160,120,140,190,95],
      fill: true, 
      fill:true,     
      backgroundColor: gradientBg,
      lineTension:0.4,
      pointBorderColor: "#fff",
      pointBackgroundColor: "#333",
      pointBorderWidth:1,
      pointRadius: 5,
      borderColor: '#fff',      
    }],
   
  };
        
  return (
    <div className='Chart'  id="div" >
         <Line 
        data={data}
        options={options}
        ref={refChart}
      />
       
    </div>
  )
}

export default Chart