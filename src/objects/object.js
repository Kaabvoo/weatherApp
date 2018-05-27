import Api from '../services/service'

var array_weather = {
    data: [],

    create_object(n, t, max, min, h, ws, wd, i, w, c, co){
        var prop = "";
        switch (w) {
            case "Clear":
                prop = "wi wi-day-sunny wi-fw"
                break;

            case "Drizlle":
                prop = "wi wi-day-rain wi-fw"
                break;

            case "Clouds":
                prop = "wi wi-day-cloudy wi-fw"
                break;

            case "Rain":
                prop = "wi wi-day-sprinkle wi-fw"
                break;
            default:
                break;
        }
        //prop = "wi wi-day-rain wi-fw"
        this.data.push({
            "name": n,
            "temperature": t,
            "temperature_max": max,
            "temperature_min": min,
            "humidity": h,
            "wind_speed": ws,
            "wind_degree": wd,
            "id": i,
            "weather": w,
            "country": c,
            "icon": prop,
            "index": this.data.length,
        })
        localStorage.setItem("WetherLocal", JSON.stringify(array_weather.data))
    },

    update_index(){
        //console.log(this.data.length)
        for(var i = 0; i <= this.data.length-1; i++){
            this.data[i].index = i
        }
    },

    erase_object(ind){
        this.data.splice(ind, 1);
        this.update_index();
        localStorage.setItem("WetherLocal", JSON.stringify(array_weather.data))
    },

    async update_object(){
        this.data.map(sub => {
            Api.getLugar(sub.name).then(res => {
                sub.temperature = res.data.main.temp;
                sub.temperature_max = res.data.main.temp_max;
                sub.temperature_min = res.data.main.temp_min;
                sub.humidity = res.data.main.humidity;
                sub.wind_speed = res.data.wind.speed;
                sub.wind_degree = res.data.wind.deg;
                sub.weather = res.data.weather[0].main;
                switch (sub.weather) {
                    case "Clear":
                        sub.icon = "wi wi-day-sunny wi-fw"
                        break;
        
                    case "Drizlle":
                        sub.icon = "wi wi-day-rain wi-fw"
                        break;
        
                    case "Clouds":
                        sub.icon = "wi wi-day-cloudy wi-fw"
                        break;
        
                    case "Rain":
                        sub.icon = "wi wi-day-sprinkle wi-fw"
                        break;
                    default:
                        break;
                }
            })
            return sub;
        })
    },
}

export default array_weather;