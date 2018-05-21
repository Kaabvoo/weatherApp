import React, { Component } from 'react';
import CardList from './CardList/cardList';
import './container.css';

export default class Container extends Component {
  /*constructor(){
    super()
    weathers: {
      city: '';
      temp: '';
      icon: '';
    }
  }*/



  render() {
    return (
      <div className="container">
        <CardList />
      </div>
    );
  }
}
