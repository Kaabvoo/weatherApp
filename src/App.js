import React, { Component } from 'react';
import Header from './Header/header';
import Container from './Container/container';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Container />
      </div>
    );
  }
}

export default App;
