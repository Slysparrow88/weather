fetch('http:////api.openweathermap.org/data/2.5/onecall?lat=48.45&lon=34.9833&exclude=current,minutely,hourly,alerts&appid=7d1bad29c4c3b8d926f79f97c6fddad7')
    .then(function (res) { return res.json() })
    .then(function (data) {

        function renderForecast(data) {
            let forecastDataContainer = document.querySelector('#forecast');
            let forecasts = '';

            for (let i = 0; i < 8; i++) {

                let item = data.daily[i];


                //get date--------------------------------------------------------------------
                let date = new Date(item.dt * 1000);

                let getMonth = date.toString().substr(0, 3);
                let getDate = date.toString().substr(4, 7);
                let initDate = getMonth + ', ' + getDate;

                //get icon--------------------------------------------------------------------  
                const img = document.createElement('img');
                img.src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

                //get temperature--------------------------------------------------------------------
                let temperature = Math.round(item.temp.day - 273) + '&deg' + 'C';

                let template = `<div class="forecast-item">
            <div id="day-one" class="forecast-time">${initDate}</div>
            <div class="forecast-icon"><img src="${img.src}"></div>
            <div class="forecast-temperature">${temperature}</div>
        </div>`
                forecasts += template;
            };
            forecastDataContainer.innerHTML = forecasts;
        }
        renderForecast(data);

    });