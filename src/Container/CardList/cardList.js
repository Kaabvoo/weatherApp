import React, { Component } from 'react';
import Card from './Card/card'
import './cardList.css'
import array_weather from '../../objects/object';
//import {Animated} from "react-animated-css"

export default class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: false
        }
    }
    
    componentWillMount(){
        console.log(JSON.parse(localStorage.getItem("WetherLocal")))
        if(JSON.parse(localStorage.getItem("WetherLocal")) !== null)
        {array_weather.data = JSON.parse(localStorage.getItem("WetherLocal"))}
    }

    componentWillUnmount(){
        localStorage.setItem("WetherLocal", JSON.stringify(array_weather.data))
    }
    componentWillUpdate(){
        console.log(JSON.parse(localStorage.getItem("WetherLocal")))
    }

    render() {
        return (
            <div className="CardList">
                {array_weather.data.map((card, i)=>{
                    return(
                    <Card 
                        key={i} 
                        condition={card.icon} 
                        name = {card.name + "," + card.country} 
                        temp = {card.temperature} 
                        weather = {card.weather} 
                    />
                    )}
                )}
            </div>
        );
    }
}