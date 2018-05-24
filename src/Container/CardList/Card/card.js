import React, { Component } from 'react';
import arrow from '../../../objects/arrow.png'
import 'weather-icons/css/weather-icons.css';
import './card.css'

export default class Card extends Component {
    constructor(){
        super()
        this.state={
            estado: false,
        }
        this.cardClick = this.cardClick.bind(this)
    }

    cardClick(i){
        this.setState({estado: !this.state.estado});
    }

    rotation(){
        var angle = this.props.w_dg;
        return("transform: rotate({" + angle +"})")
    }

    render() {
        let d;
        if(this.state.estado){
            d = <div>
                    <hr/>
                    <div className="DBox">
                        <div className="Detalles">
                            <p>Max: {this.props.max}</p>
                            <p>Min: {this.props.min}</p>
                            <p>Wind&#9759;</p>
                            <p className="sp">Speed: {this.props.w_sp}</p>
                            <p className="de">Degree: {this.props.w_dg}</p> 
                        </div>
                        <div className="Rot">
                            <img src={arrow} alt="Arrow" height="100" width="100" style={this.rotation} /> 
                        </div>
                    </div>
                </div>
        }
        else{
            d = null
        }
        const i = <i className={this.props.condition}></i>
        return (
            <div className="Card" onClick={this.cardClick}>
                <p className="where" >{this.props.name}</p>
                <div className="icons">
                    {i}
                    <p className="temp" >{this.props.temp}°C</p>
                </div>
                {d}
            </div>
        );
    }
}