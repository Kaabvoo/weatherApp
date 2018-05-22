import React, { Component } from 'react';
import array_weather from '../objects/object'
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
      this.props.check(true);
      Api.getLugar(this.state.lugar).then(ret=>{
        var r = ret.data
        array_weather.create_object(r.name, r.main.temp, r.main.temp_max, r.main.temp_min, r.main.humidity, r.wind.speed, r.wind.deg, r.id, r.weather[0].main);
        //this.props.check(true);
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