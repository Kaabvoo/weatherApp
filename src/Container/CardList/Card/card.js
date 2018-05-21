import React, { Component } from 'react';
import 'weather-icons/css/weather-icons.css';
import './card.css'

export default class Card extends Component {
    
    componentDidMount(){
        console.log("Mounted")
    }

    render() {
        return (
            <div className="Card">
                <p className="where" >Monterrey</p>
                <div className="icons">
                    <i className="wi wi-day-sunny wi-fw"></i>
                    <p className="temp" >30°C</p>
                </div>
                <hr/>
                <div className="micel">
                    <p className="weather" >Soleado</p>
                </div>
            </div>
        );
    }
}