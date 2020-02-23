import React from 'react';
import './App.css';
import Main from './components/Main'
import LandingPage from './components/LandingPage'
import Logo from './components/Logo'


function App() {
  return (
    <div className="App">
      <Logo />
      <LandingPage />
      <Main />
    </div>
  );
}

export default App;
