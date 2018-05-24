import React, { Component } from 'react';
import CardList from './CardList/cardList';
import './container.css';

export default class Container extends Component {

  render() {
    return (
      <div className="container">
        <CardList />
      </div>
    );
  }
}
