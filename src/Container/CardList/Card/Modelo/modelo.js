import React, { Component } from 'react';
import Api from '../../../../services/service'
import {LineChart} from 'react-easy-chart';
import './modelo.css'

export default class Modelo extends Component {
    constructor(props){
        super(props)
        this.state = {
            datos: [],
            name: "Loading...",
            wSize: window.innerWidth-60,
            temp: "Loading...",
            max: "Loading...",
            min: "Loading...",
            hum: "Loading...",
            pres: "Loading...",
            ws: "Loading...",
            wd: "Loading...",
            srise: "Loading...",
            sset: "Loading...",
            weath: [],
            test: Boolean,
        }
        this.cardErase = this.cardErase.bind(this);
    }

    resizingDom(){
        var z = window.innerWidth-60
        this.setState({wSize: z})
    }

    cardErase(){
        this.props.getChild();
    }

    async componentWillMount(){
        window.addEventListener("resize", this.resizingDom.bind(this))
        Api.getLugar(this.props.name)
        .then(res => {
            var r = res.data
            this.setState({
                name: r.name + "," + r.sys.country,
                temp: r.main.temp,
                max: r.main.temp_max,
                min: r.main.temp_min,
                hum: r.main.humidity,
                pres: r.main.pressure,
                ws: r.wind.speed,
                wd: r.wind.deg,
                srise: r.sys.sunrise,
                sset: r.sys.sunset,
                weath: r.weather,
            })
        })
        await Api.getForecast(this.props.name)
        .then((res)=>{
            var x = 1;
            res.data.list.map(ret => {
                //console.log(ret.dt_txt)
                this.state.datos.push({
                    "x": x,
                    "y": Math.round(ret.main.temp),
                })
                x++;
                return true
            })
        })
        this.setState({test: !this.state.test})
    }

    render() {
        return (
                <div className="Modelo">
                    <p className="closeWindow" onClick={this.props.putChild} >Cerrar</p>
                    <div className="DBox">
                        <div className="Now">
                            <p className="place" >{this.state.name}</p>
                            <h2>Details for Today:</h2>
                            <ul>
                            {this.state.weath.map((oneWea, i) => {
                                return (<li key={i} >{oneWea.main}</li>)
                            })}
                            </ul>
                            <p>Actual Temperature: {this.state.temp}</p>
                            <p>Max Temperature: {this.state.max}</p>
                            <p>Min Temperature: {this.state.min}</p>
                            <p>Humidity: {this.state.hum}</p>
                            <p>Preassure: {this.state.pres}</p>
                            <p>Wind Speed: {this.state.ws}</p>
                            <p>Wind Degree: {this.state.wd}</p>
                            <p>Sunrise at: {this.state.srise}</p>
                            <p>Sunset at: {this.state.sset}</p>
                        </div>
                        <hr/>
                        <div className="Future">
                            <h2>Details for the next Hours</h2>
                            <LineChart
                                axes
                                grid
                                verticalGrid
                                height="300"
                                width={this.state.wSize}
                                data={[this.state.datos]}
                            />
                        </div>
                    </div>
                </div>
        );
    }
}