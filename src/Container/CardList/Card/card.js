import React, { Component } from 'react';
import 'weather-icons/css/weather-icons.css';
import './card.css'

export default class Card extends Component {
    constructor(){
        super()
        this.state={
            temp: 30,
            interval: String,
        }
        this.timer = this.timer.bind(this);
    }

    timer(){
        this.setState({temp: this.state.temp - 1})
        
    }

    /*<hr/>
                <div className="micel">
                    <p className="weather" >{this.props.weather}</p>
                </div>*/

    render() {
        const i = <i className={this.props.condition}></i>
        return (
            <div className="Card">
                <p className="where" >{this.props.name}</p>
                <div className="icons">
                    {i}
                    <p className="temp" >{this.props.temp}°C</p>
                </div>
            </div>
        );
    }
}