import React from 'react';
import './App.css';
import Main from './components/Main'
import LandingPage from './components/LandingPage'
import Logo from './components/Logo'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
        <div className="App">
          <Logo />
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/main' component={Main}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
