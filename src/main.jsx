 import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// const index = 1

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// component with function
// function Clock({ locale }){
//   return (
//     <h1 className='heading' tabIndex={index}>
//       <span className='subText'>{new Date().toLocaleTimeString(locale)}</span>
//       <img src="" alt="" />
//     </h1>
//   ) 
// }

// component with class

// root.render(<MyClock locale="bn-bd" />);  
