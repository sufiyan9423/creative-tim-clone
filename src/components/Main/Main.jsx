import MainContainer from '../../MainContainer/MainContainer'
import ColorSelectionContainer from '../ColorSelectionContainer/ColorSelectionContainer'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import   './Main.css'

const Main = ({exapand,setExpand}) => {
  return (
    <div className={exapand?"Main exapand":"Main"}>
        <Navbar exapand={exapand} setExpand={setExpand}/>
        <Header/>
        <MainContainer/>
        <ColorSelectionContainer/>
    </div>
  )
}

export default Main