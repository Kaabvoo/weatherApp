var array_weather = {
    data: [],

    create_object(n, t, max, min, h, ws, wd, i, w, c, co){
        var prop = "";
        switch (co) {
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
            "condition": co,
            "icon": prop
        })
        localStorage.setItem("WetherLocal", JSON.stringify(array_weather.data))
    },
}

export default array_weather;