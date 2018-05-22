import React, { Component } from 'react';
import Card from './Card/card'
import array_weather from '../../objects/object'
import './cardList.css'

export default class CardList extends Component {
    constructor(){
        super()
        this.state = {
            cardsArray: []
        }
    }
    componentWillUpdate(){
        this.setState({cardsArray: array_weather.returnArray()});
        console.log("This shit will UPDATE!! FINALLY!!!!!");
    }

    render() {
        //const ar = [1]
        //const listmap = ar.map((some, i)=>{ return(<Card name = "Monterrey" temp = "30" weather = "Sunny" />)});
        const listmap = this.state.cardsArray.map((some, i)=>{ return(<Card name = {some[i].name} temp = {some[i].temp} weather = {some[i].weather} />)});
        return (
            <div className="CardList">
                {listmap}
            </div>
        );
    }
}