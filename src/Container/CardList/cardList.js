import React, { Component } from 'react';
import Card from './Card/card'
import './cardList.css'

export default class CardList extends Component {

    componentDidMount(){
        console.log("Mounted")
    }

    componentWillUpdate(){
        console.log("WillUpdate")
    }

    shouldComponentUpdate(){
        console.log("SouldUpdate?")
    }

    render() {
        return (
            <div className="CardList">
                <Card className="Cards"/>
                <Card className="Cards"/>
                <Card className="Cards"/>
                <Card className="Cards"/>
                <Card className="Cards"/>
            </div>
        );
    }
}