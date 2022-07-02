
// nav Data
  export const navData=[
    {
      heading:"DashBoard",
      icon:"fa-solid fa-cube"
    },
    {
        heading:"icons",
        icon:"fa-solid fa-map-location"
    },
    {
        heading:"maps",
        icon:"fa-solid fa-map"
    },
    {
        heading:"Notifications",
        icon:"fa-solid fa-bell"
    },
    {
        heading:"user",
        icon:"fa-solid fa-user"
    },
    {
        heading:" table list  ",
        icon:"fa-solid fa-address-book"
    },

      {  heading:"typography",
        icon:"fa-solid fa-pen"
    },
  ]

  // area chart options

 export const  options={           
    plugins: {
        legend: {
            display: false,                    
           
         } ,
         tooltip:{
            enabled:true,
            titleFontSize: 13,
            bodyFontSize: 13,
           
         }
         
        } ,
    scales: {
          y: {
            max: 200,
            min: 0,
         
            ticks: {
                stepSize: 50,
                font:{weight:'bold'},
                color:"rgba(255,255,255,0.5)",
                
            },
            // stacked: true,
            grid: {
                      color: 'rgba(255,255,255,0.1)',
                      borderColor: '#2c2c2c',
                      tickColor: '#2c2c2c'
               },
                   
              
        },  
        x: {
           // stacked: true,
            ticks: {
              color:"rgba(255,255,255,0.5)",
              font:{weight:'bold'},
             
              
          },
            grid: {
              color: '',
              borderColor: '#2c2c2c',
              tickColor: ' #2c2c2c'
            }
        },
      
    },
    maintainAspectRatio: false,
    responsive:true,
    borderWidth:2.2,
    // backgroundColor:"rgba(255,255,255,0.06 )"

}
//monthArray
export const monthArray=["JAN","FEB","MAR","APRIL","MAY","JUN","JULY","AUG","SEPT","OCT","NOV","DEC"] 

// options for the Shipped Products card

 // area chart options

 export const  ShipedOptions={           
  plugins: {
      legend: {
          display: false,                    
          
       } ,
       tooltip:{
          enabled:true,
          titleFontSize: 8,
          bodyFontSize: 5,
  
       }
       
      } ,
  scales: {
        y: {  
                  
           display:false,        
                
            
      },  
      x: {
         
          display:false,
        
      },
    
  },
  maintainAspectRatio: false,
  responsive:true,
//  borderWidth:2.5,
 

}

//sales card options
export const  SalesOptions={           
  plugins: {
      legend: {
          display: false,                    
          
       } ,
       tooltip:{
          enabled:true,
          titleFontSize: 8,
          bodyFontSize: 5,
  
       }
       
      } ,
      scales: {

        y: {
        
          grid:{
            drawBorder:false,
           
          },
          ticks:{
            stepSize: 500,
            font:{size:12}
          }
          //   display:false,
          // ticks: {
          //    beginAtZero: true,
          //     stepSize: 500,
          //     font:{size:11},
          //     display:true,
              
          // },
          // grid: {
          //     gridLines:{
          //       drawBorder:false,
          //     }
          // },
          // // stacked: true,
          // color: '',
          // borderColor:'#fff',
         
                 
            
      },  
      x: {
        // stacked: true,
        display:false,
      }
      },
  maintainAspectRatio: false,
  responsive:true,
  borderWidth:2.5,
  borderColor:'#18ce0f',

}
// time array
export const timeArray=["12pm","3pm","6pm","9pm","12am","3am","6am","9am"] 

// /emailOptions

 export  const emailOptions={
 plugins:{
    legend:{
      display:false
    },
  },
    scales: {
     y:{
      max: 160,
      min: 60,
       grid:{
        drawBorder:false,
       
      },
      ticks:{
        stepSize: 20,
        font:{size:12}
      }
    },
      x:{
        display:false,
      }
    },
    maintainAspectRatio: false,
   responsive:true,
  // borderWidth:2.5,
  // borderColor:'#18ce0f',

 
}

// tasks data
 export const tasks=[
  {
      checked:true,
      text:"Sign contract for \"What are conference organizers afraid of?\""
  },
  {
      checked:false,
      text:"Lines From Great Russian Literature? Or E-mails From My Boss?"
  },
  {
      checked:true,
      text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"
  }
]