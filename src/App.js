import React, { Component } from 'react';
import logo from './logo.svg';
import reduxLogo from './redux.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import SectionOne from './components/SectionOne/SectionOne';
import SectionTwo from './components/SectionTwo/SectionTwo';
import SectionThree from './components/SectionThree/SectionThree';
import SectionFour from './components/SectionFour/SectionFour';


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <img src={reduxLogo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React Redux</h1>
              <nav>
                <ul>
                <li><Link to="/">Section One</Link></li>
                <li><Link to="/2">Section Two</Link></li>
                <li><Link to="/3">Section Three</Link></li>
              </ul>
              </nav>
            </header>

            <div className="content-container">
              <Route exact path="/" component={SectionOne} />
              <Route path="/2" component={SectionTwo} />
              <Route path="/3" component={SectionThree} />
              <Route path="/4" component={SectionFour} />
            </div>

          </div>
      </Router>
    );
  }
}

export default App;
