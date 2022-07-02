import { Line ,Bar} from 'react-chartjs-2'
import reChart from 'chart.js/auto';

// import  './Chart.css'
import { useEffect, useRef, useState } from 'react';
import {  emailOptions, monthArray, SalesOptions, ShipedOptions, timeArray } from '../../Data/Data';
import { type } from '@testing-library/user-event/dist/type';

const CardChart = ({type,chartType}) => {
    const refDiv=useRef();
    let [gradientBg,seGradientBg]=useState({}); 
    // console.log(chartType);
    let chartData;
    


    useEffect(() => {
          function init(){
              // console.log(refDiv.current.canvas);
              const canvas=refDiv.current.canvas;
               const ctx = canvas.getContext("2d")
             gradientBg=ctx.createLinearGradient(0,0,0,130)
            // gradientBg.addColorStop(0,'rgba(252,181,158,1)');
            // gradientBg.addColorStop(0.5,'rgba(252,181,158,0.9)');
            //gradientBg.addColorStop(1,'rgba(252,181,158,0.2)');
            if(type==='global'){
                    gradientBg.addColorStop(0, "rgba(253,193,177,1)");
                    gradientBg.addColorStop(0.5, "rgba(253,193,177,0.8)");
                    gradientBg.addColorStop(1, "rgba(253,193,177,0.01)");
                // gradientBg.addColorStop(0, "rgba(253,193,177,1)");
                // gradientBg.addColorStop(0.2, "rgba(253,193,177,0.8)");
                // gradientBg.addColorStop(0.3, "rgba(253,193,177,0.7)");
                // gradientBg.addColorStop(0.5, "rgba(253,193,177,0.6)");
                // gradientBg.addColorStop(0.6, "rgba(253,193,177,0.5)");
                // gradientBg.addColorStop(0.7, "rgba(253,193,177,0.4)");
                // gradientBg.addColorStop(0.8, "rgba(253,193,177,0.3)");
                // gradientBg.addColorStop(0.9, "rgba(253,193,177,0.2)");
                // gradientBg.addColorStop(1, "rgba(250,174,50,0.01)");
                seGradientBg(gradientBg)
            }
            else if (type==='sales'){

                    gradientBg.addColorStop(0, "rgba(162,235,159,1)");
                    gradientBg.addColorStop(0.5, "rgba(162,235,159,0.8)");
                    gradientBg.addColorStop(1, "rgba(162,235,159,0.01)");              
                // gradientBg.addColorStop(0, "rgba(162,235,159,1)");
                // gradientBg.addColorStop(0.2, "rgba(162,235,159,0.8)");
                // gradientBg.addColorStop(0.3, "rgba(162,235,159,0.7)");
                // gradientBg.addColorStop(0.4, "rgba(162,235,159,0.6)");
                // gradientBg.addColorStop(0.5, "rgba(162,235,159,0.5)");
                // gradientBg.addColorStop(0.6, "rgba(162,235,159,0.4)");
                // gradientBg.addColorStop(0.7, "rgba(162,235,159,0.3)");
                // gradientBg.addColorStop(0.8, "rgba(162,235,159,0.2)");
                // gradientBg.addColorStop(0.9, "rgba(162,235,159,0.1)");
                // gradientBg.addColorStop(1, "rgba(162,235,159,0.001)");               
                seGradientBg(gradientBg)  
            }
            else if(type==='email'){
            //  console.log(em);
            // gradientBg.addColorStop(0, 'orange');
            // gradientBg.addColorStop(1, 'purple');

              gradientBg.addColorStop(0, "rgba(165,216,254,1)");
              gradientBg.addColorStop(0.5, "rgba(165,216,254,0.8)");
              gradientBg.addColorStop(1,'rgba(165,216,254,0.3')
              // gradientBg.addColorStop(0.2, "rgba(165,216,254,0.9)");
              // gradientBg.addColorStop(0.3, "rgba(165,216,254,0.8)");
              // gradientBg.addColorStop(0.4, "rgba(165,216,254,0.8)");
              // gradientBg.addColorStop(0.5, "rgba(165,216,254,0.8)");
              // gradientBg.addColorStop(0.6, "rgba(165,216,254,0.8)");
              // gradientBg.addColorStop(0.7, "rgba(165,216,254,0.8)");
              // gradientBg.addColorStop(0.8, "rgba(165,216,254,0.8)");
              // gradientBg.addColorStop(0.9, "rgba(165,216,254,0.8)");
              // gradientBg.addColorStop(1, "rgba(165,216,254,0.7)");
              seGradientBg(gradientBg)
            }
            // console.log(gradientBg);
           
          }
          
         
          init();
     
    }, [])
    
    const data = {
        labels:monthArray,
        datasets: [{
          label: 'USERS',
          data: [180, 150,100, 150,130,60,90,150,160,120,140,190,95,110,150  ],
          fill:true,     
           backgroundColor: gradientBg,
        
          lineTension:0.4,
          borderColor: '#f96335',
          borderWidth:1.5,
            
        },
        
      ],
       
      };  
    switch (type) {
        case "global":
            chartData = {
            data:{
                        labels:monthArray,
                        datasets: [{
                        label: 'USERS',
                        data: [542, 480,430, 550,530,453,380,434,568,610,700,630,610],
                        fill:true,     
                        backgroundColor: gradientBg,                        
                        lineTension:0.4,
                        borderColor: '#f96335',
                        borderWidth:1.5,
                            
                        },
                        
                    ],
               
              },  
                 options:ShipedOptions,           
          };      
          break;
          case "sales":
            chartData = {
                data:{
                            labels:timeArray,
                            datasets: [{
                            label: 'Email Stats',
                            data: [40,500,650,700,1200,1250,1300,1900],
                            fill:true,     
                            backgroundColor: gradientBg,                            
                            lineTension:0.4,
                            borderColor:"#35d42d",                        
                            borderWidth:1.5,
                                
                            },
                            
                        ],
                   
                  },  
                     options:SalesOptions,           
              };    
              break;      
              case "email":
                chartData = {
                    data:{
                                labels:monthArray,
                                datasets: [{
                                label: 'Active Countries',
                                data: [80,99,85,91,123,84,100,80,88,91,125,155],                                    
                                backgroundColor: gradientBg,                        
                                borderColor: '#58b9ff',
                                borderWidth:1,
                              
                                    
                                },
                                
                            ],
                       
                      },  
                         options:emailOptions,  
                                 
                  };    
                  break;      
                  
    }
   
  return (
   
    <div className={ type==='global' ? 'Chart start' :'Chart'}  id="div" >
         
         { chartType==='Line' &&  < Line
            data={chartData.data}
            options={chartData.options}
        ref={refDiv}
        /> }

        { chartType==='Bar' &&  < Bar
            data={chartData.data}
            options={chartData.options}
        ref={refDiv}
        /> }
       
    </div>
  )
}

export default CardChart