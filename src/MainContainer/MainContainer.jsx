import './MainContainer.css'
import Cards from '../components/Cards/Cards'
import TaskandStat from '../components/TaskandStat/TaskandStat'
import Footer from '../components/Footer/Footer'

const MainContainer = () => {
  return (
    <div className='MainContainer'>
        <Cards/>
        <TaskandStat/>
        <Footer/>
    </div>
  )
}

export default MainContainer