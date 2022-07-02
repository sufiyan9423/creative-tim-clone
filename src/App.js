
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAirFreshener, faCube } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import { useState } from 'react';

function App() {
  const [exapand,setExpand]=useState(false)

  return (
    <div className="App">
        <Sidebar exapand={exapand} setExpand={setExpand}/>
        <Main exapand={exapand} setExpand={setExpand}/>
    </div>
  );
}

export default App;
