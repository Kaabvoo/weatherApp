import React, { Component } from 'react';
import arrow from '../../../objects/arrow.png'
import 'weather-icons/css/weather-icons.css';
import './card.css'

export default class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            estado: false,
        }
        this.cardClick = this.cardClick.bind(this)
        this.cardErase = this.cardErase.bind(this)
    }

    cardClick(i){
        this.setState({estado: !this.state.estado});
    }

    cardErase() {
        this.props.erase(this.props.index)
    }

    rotation(){
        return("dope")
    }

    render() {
        const ico = <img src={arrow} alt="Arrow" className={this.rotation} height="110" />
        let d;
        const i = <i className={this.props.condition}></i>
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
                            {ico}
                        </div>
                    </div>
                </div>
        }
        else{
            d = null
        }
        return (
            <div className="Card" onClick={this.cardClick} onDoubleClick={this.cardErase} >
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