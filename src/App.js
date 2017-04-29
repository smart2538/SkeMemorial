import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Button primary>Try this</Button>
        </p>
      </div>
    );
  }
}

export default App;
