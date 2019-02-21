import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from './components/header/Header'
import Projects from './components/projects/Projects';
import Project from './components/project/Project';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={Projects}/>
        <Route exact path='/projects/:projectId' component={Project}/>
      </div>
    );
  }
}

export default App;
