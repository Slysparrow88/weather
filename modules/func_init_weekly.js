function renderForecast(data) {
    let forecastDataContainer = document.querySelector('#forecast');
    let forecasts = '';

    for (let i = 0; i < 7; i++) {
        let item = data.daily[i];

        //get date--------------------------------------------------------------------
        let date = new Date(item.dt * 1000);
        let getMonth = date.toString().substr(0, 3);
        let getDate = date.toString().substr(4, 7);
        let initDate = getMonth + ', ' + getDate;
        //get icon--------------------------------------------------------------------  
        const img = document.createElement('img');
        img.src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        //get temperature-------------------------------------------------------------
        let temperature = Math.round(item.temp.day - 273) + '&deg' + 'C';
        // set to DOM-----------------------------------------------------------------
        let template = `<div class="forecast-item">
            <div id="day-one" class="forecast-time">${initDate}</div>
            <div class="forecast-icon"><img src="${img.src}"></div>
            <div class="forecast-temperature">${temperature}</div>
        </div>`;
        forecasts += template;
    };
    forecastDataContainer.innerHTML = forecasts;
}
export default renderForecast;