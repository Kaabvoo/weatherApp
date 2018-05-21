import React, { Component } from 'react';
import Api from '../services/service'
import './header.css';

export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      estado: false,
      lugar: "",
      respuesta: String,
    }
    this.cambiarYMostrar = this.cambiarYMostrar.bind(this);
    this.linker = this.linker.bind(this);
  }

  cambiarYMostrar(o){
    if(this.state.estado){
      Api.getLugar(this.state.lugar).then(ret=>{
        console.log(ret.data);
        this.setState({respuesta: ret.data})
      });
    }
    this.setState({estado: !this.state.estado})
  }

  linker(i){
    this.setState({lugar: i.target.value})
  }

  render() {
    return (
      <div className="Header">
        <h1>Weather Channel</h1>
        <button onClick={this.cambiarYMostrar}>Add Location</button>
        {this.state.estado ? <input type="text" className="entrada"  onChange={this.linker} /> : null}
      </div>
    );
  }
}