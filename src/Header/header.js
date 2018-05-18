import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {

  render() {
    return (
      <div className="Header">
        <h1 className="" >Weather Channel</h1>
        <button>Add Location</button>
      </div>
    );
  }
}