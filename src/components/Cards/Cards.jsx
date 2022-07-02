import  './Cards.css'
import Card from '../Card/Card'

const Cards = () => {
  return (
    <div className='Cards'>
        <Card  type={"global"}/>
        <Card type={"sales"}/>
        <Card type={"email"}/>
    </div>
  )
}

export default Cards