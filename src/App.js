import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Nav from './Nav';
import Design from './Design';
import About from './About';
import Home from './Home';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/design' component={Design} />
            <Route exact path='/about' component={About} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
