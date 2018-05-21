import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      estado: false,
    }
    this.cambiarYMostrar = this.cambiarYMostrar.bind(this);
  }

  cambiarYMostrar(){
    this.setState({estado: !this.state.estado})
  }

  render() {
    return (
      <div className="Header">
        <h1 className="" >Weather Channel</h1>
        <button onClick={this.cambiarYMostrar}>Add Location</button>
        <p>{this.state.estado ? "true" : "false"}</p>
      </div>
    );
  }
}