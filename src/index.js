import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BackgroundContextProvider } from './Context/BackgroundContext/BackgroundContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BackgroundContextProvider>
    <App />
    </BackgroundContextProvider>
  </React.StrictMode>
);



