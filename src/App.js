import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBarReact  from './component/NavBar.js';
import Projects  from './page/Projects.js';

import { Button, Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarReact />
        <Container>
          <Projects />
        </Container>
      </div>
    );
  }
}

export default App;
