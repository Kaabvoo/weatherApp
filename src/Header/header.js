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

  async cambiarYMostrar(o){
    if(this.state.estado){
      await Api.getLugar(this.state.lugar).then(ret=>{
        array_weather.create_object(ret.data.name, Math.floor(ret.data.main.temp), ret.data.main.temp_max, ret.data.main.temp_min, ret.data.main.humidity, ret.data.wind.speed, ret.data.wind.deg, ret.data.id, ret.data.weather[0].main, ret.data.sys.country);
      });
      this.props.check(true);
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
        {this.state.estado ? <input name="city" autoComplete="on" type="text" className="entrada"  onChange={this.linker} /> : null}
      </div>
    );
  }
}