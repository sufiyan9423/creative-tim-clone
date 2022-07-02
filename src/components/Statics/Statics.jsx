import  './Statics.css'

const Statics = () => {
  function createData(Name, Country, City, Salary) {
    return { Name, Country, City, Salary };
  }
  
  const rows = [
    createData('Dakota Rice','Niger' ,'Oud-Turnhout' ,'$36,738' ),
    createData("Minerva Hooper",	"Curaçao"	,"Sinaai-Waas",	"$23,789"),
    createData("Sage Rodriguez",	"Netherlands",	"Baileux",	"$56,142"),
    createData('Doris Greene',	"Malawi","Feldkirchen in Kärnten",	"$63,542"),
    createData('Mason Porter',	"Chile"	,"Gloucester",	"$78,615")
  ];
  return (
    <div className='Statics'>
        <div className="tasks-head">
            <h3>All Persons List </h3>
            <h1>Employees Stats</h1>
        </div>
        <div className="tasks-body">
            <table className="table">
              <thead>
                  <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th className='text-right'>Salary</th>
                  </tr>
                </thead>
                <tbody>
               {rows.map((row,i)=>{
                 return(
                  <tr key={i}>
                    <td>{row.Name}</td>
                    <td>{row.Country}</td>
                    <td>{row.City}</td>
                    <td className='text-right'>{row.Salary}</td>
                  </tr>
                 )
               })}
                 </tbody>
             
            </table>
        </div>  
    </div>
  )
}

export default Statics