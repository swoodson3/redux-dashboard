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
        <Grid container spacing={16} justify="center">

          <div className="App">

            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <img src={reduxLogo} className="App-logo" alt="logo" />

              <h1 className="App-title">Welcome to React Redux</h1>
              
                <Link to="/"><Button>Section One</Button></Link>
              <Button>
                <Link to="/2">Section Two</Link>
              </Button>

              <Button>
                <Link to="/3">Section Three</Link>
              </Button>

              <Button>
                <Link to="/4">Section Four</Link>
              </Button>
            </header>
            <View />
          </div>
        </Grid>
      </Router>
    );
  }
}

export default App;
