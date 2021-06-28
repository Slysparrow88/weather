import renderForecast from '../modules/func_init_weekly.js';
import createChart from '../modules/func_init_chart.js';

function requestCurrentWeather() {
    fetch('http:////api.openweathermap.org/data/2.5/onecall?lat=48.45&lon=34.9833&exclude=current,minutely,hourly,alerts&appid=7d1bad29c4c3b8d926f79f97c6fddad7')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            renderForecast(data);
            createChart(data);
        });
}requestCurrentWeather()