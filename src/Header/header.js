import React, { Component } from 'react';
import Api from '../services/service'
import './header.css';

export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      estado: false,
      //agrega estados y api
    }
    this.cambiarYMostrar = this.cambiarYMostrar.bind(this);
  }

  cambiarYMostrar(){
    if(this.state.estado){
      
    }
    this.setState({estado: !this.state.estado})
  }

  render() {
    return (
      <div className="Header">
        <h1 className="" >Weather Channel</h1>
        <button onClick={this.cambiarYMostrar}>Add Location</button>
        {this.state.estado ? <input type="text" className="entrada" /> : null}
      </div>
    );
  }
}