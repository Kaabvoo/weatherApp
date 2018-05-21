import axios from 'axios'
var Api = {
    getLugar(lugar) {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + lugar + '&appid=fbcc70b37545ac5adb0b19bf9d030da7&units=metric')
    }
}