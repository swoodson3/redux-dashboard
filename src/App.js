import React, { Component } from 'react';
import logo from './logo.svg';
import reduxLogo from './redux.svg'
import './App.css';
import { Grid, Button } from 'material-ui'
import View from './components/View/View';
import { BrowserRouter as Router, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <img src={reduxLogo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React Redux</h1>
              
                <Link to="/"><Button variant="raised">Section One</Button></Link>
                <Link to="/2"><Button variant="raised">Section Two</Button></Link>
                <Link to="/3"><Button variant="raised">Section Three</Button></Link>
              
            </header>
            <View />
          </div>
      </Router>
    );
  }
}

export default App;
