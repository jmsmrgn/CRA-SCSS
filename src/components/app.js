import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
        Hello World
      </div>
    );
  }
}

export default App;
