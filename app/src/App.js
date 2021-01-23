import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import './bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar /> 
        Created for Minnehack 2021
      </div>
    );
  }
}

export default App;
