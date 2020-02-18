import React from 'react';
import './App.css';
import localShow from './localShow.png'
import Address from './components/Address'

function App() {
  return (
    <div className="App">
      <img className='logo' alt ='logo didnt make it' src={localShow}></img>
      <h3 className='findShowsTitle'>Find Shows Near Me.</h3>
      <Address />
    </div>
  );
}

export default App;
