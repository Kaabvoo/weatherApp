import React, { Component } from 'react';
import Header from './Header/header';
import Container from './Container/container';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: Boolean,
    };
    this.fromChild = this.fromChild.bind(this);
  }

  fromChild(i){
    this.setState({item: i})
  }

  render() {
    return (
      <div className="appHead" >
        <Header check = {this.fromChild} />
        <hr />
        <Container/>
      </div>
    );
  }
}

export default App;
