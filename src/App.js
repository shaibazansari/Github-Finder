import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './component/layout/navbar';
import Alert from './component/layout/alert';
import About from './component/pages/about';
import Userdetail from './component/user/userdetail';
import Home from './component/pages/home';
import NotFound from './component/pages/notfound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title='Github Finder' />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home}  />
                <Route exact path='/about' component={About} />
                <Route exact path="/user/:login" component={Userdetail} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
