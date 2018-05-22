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

    componentDidMount(){
        //this.interval = setInterval(this.timer, 1000);
    }

    timer(){
        this.setState({temp: this.state.temp - 1})
        
    }

    render() {
        const i = <i className="wi wi-day-sunny wi-fw"></i>
        return (
            <div className="Card">
                <p className="where" >{this.props.name}</p>
                <div className="icons">
                    <p className="temp" >{this.props.temp}°C</p>
                </div>
                <hr/>
                <div className="micel">
                    <p className="weather" >{this.props.weather}</p>
                </div>
            </div>
        );
    }
}