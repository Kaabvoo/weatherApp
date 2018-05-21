import React, { Component } from 'react';
import Card from './Card/card'
import './cardList.css'

export default class CardList extends Component {
    render() {
        return (
            <div className="CardList">
                <Card className="Cards"/>
            </div>
        );
    }
}