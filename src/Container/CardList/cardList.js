import React, { Component } from 'react';
import Card from './Card/card'
import './cardList.css'
import array_weather from '../../objects/object';
//import {Animated} from "react-animated-css"

export default class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: false,
            up: true,
            token: 'WetherLocal',
        }
        this.eraseItm = this.eraseItm.bind(this)
    }
    
    componentWillMount(){
        //console.log(JSON.parse(localStorage.getItem("WetherLocal")))
        if (typeof(Storage) !== "undefined"){
            if(JSON.parse(window.localStorage.getItem(token)) !== null)
            {array_weather.data = JSON.parse(window.localStorage.getItem(token))}
        }else{
            alert("Your Browser Doesent suppor Local Storage :'(")
        }
        array_weather.update_object();
        this.setState({test: !this.state.test})
    }

    componentWillUnmount(){
        if (typeof(Storage) !== "undefined"){
            window.localStorage.setItem(token, JSON.stringify(array_weather.data))
        }
    }
    componentWillUpdate(){
        if (typeof(Storage) !== "undefined"){
            JSON.parse(window.localStorage.getItem(token))
        }
    }

    eraseItm(i){
        array_weather.erase_object(i);
        this.setState({up: !this.state.up})
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
                        temp = {Math.floor(card.temperature)}
                        weather = {card.weather} 
                        max = {card.temperature_max}
                        min = {card.temperature_min}
                        w_sp = {card.wind_speed}
                        w_dg = {Math.floor(card.wind_degree)}
                        index = {card.index}
                        erase = {this.eraseItm}
                    />
                    )}
                )}
            </div>
        );
    }
}