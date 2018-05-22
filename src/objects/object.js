var object_weather = {
    name: String,
    temperature: String,
    temperature_max: String,
    temperature_min: String,
    humidity: String,
    wind_speed: String,
    wind_degree: String,
    id: String,
    weather: String
}

var array_weather = {
    data: [],

    create_object(n, t, max, min, h, ws, wd, i, w){
        object_weather.name = n;
        object_weather.temperature = t;
        object_weather.temperature_max = max;
        object_weather.temperature_min = min;
        object_weather.humidity = h;
        object_weather.wind_speed = ws;
        object_weather.wind_degree = wd;
        object_weather.id = i;
        object_weather.weather = w
        this.data.push(object_weather);
        localStorage.setItem("WeatherLocal", this.data)
    },

    returnArray(){
        return this.data
    }
}

export default array_weather;