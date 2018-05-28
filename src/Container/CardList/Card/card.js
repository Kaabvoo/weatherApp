import React, { Component } from 'react';
import Modelo from './Modelo/modelo'
import 'weather-icons/css/weather-icons.css';
import './card.css'

export default class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            estado: false,
            eUnid: false,
            val: Number,
        }
        this.cardClick = this.cardClick.bind(this)
        this.cardErase = this.cardErase.bind(this)
        this.changeUnit = this.changeUnit.bind(this)
    }

    componentWillMount(){
        this.setState({val: this.props.temp  + "°C"})
    }

    cardClick(){
        this.setState({estado: !this.state.estado});
    }

    cardErase(i) {
        this.props.erase(this.props.index)
        this.cardClick();
    }

    changeUnit(event){
        event.preventDefault()
        this.state.eUnid ? this.setState({val: this.props.temp + "°C"}) : this.setState({val: Math.round((this.props.temp)*1.8+32) + "°F"})
        this.setState({eUnid: !this.state.eUnid})
    }

    render() {
        let d;
        const i = <i className={this.props.condition} onClick={this.cardClick}></i>
        if(this.state.estado){
            d = <Modelo getChild={this.cardErase} putChild={this.cardClick} name={this.props.name}/>;
        }
        else{
            d = null
        }

        return (
            <div className="Card">
                <p className="where" onClick={this.cardClick} >{this.props.name}</p>
                <div className="icons">
                    {i}
                    <p className="temp" onClick={this.changeUnit}>{this.state.val}</p>
                </div>
                {d}
            </div>
        );
    }
}