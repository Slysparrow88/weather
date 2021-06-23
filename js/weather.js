import openDetales from '../modules/func_open_detales.js';
import funcInitCurrentInfo from '../modules/func_init_current_info.js';
import funcInitDetalesInfo from '../modules/func_init_detales_info.js';

function requestWeeklyWeather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?id=709930&appid=7d1bad29c4c3b8d926f79f97c6fddad7')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            funcInitCurrentInfo(data);
            funcInitDetalesInfo(data);
            openDetales(data);
        });
} requestWeeklyWeather();