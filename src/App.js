import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/signin"><SignIn/></Route>
          
          <div>
            <Navbar/>
            <Route path="/" exact><Dashboard/></Route>
          </div>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
