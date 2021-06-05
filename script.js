fetch('http://api.openweathermap.org/data/2.5/weather?id=709930&appid=7d1bad29c4c3b8d926f79f97c6fddad7')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data)
        document.querySelector('#sity-name').textContent = data.name;
        document.querySelector('#temp').innerHTML = Math.round(data.main.temp - 273) + '&deg' + 'C';

        const arrayRangeTemp = [data.main.temp_max, data.main.temp_min];

        arrayRangeTemp.forEach(temp => {
            const p = document.createElement('p');
            p.innerHTML = Math.round(temp - 273) + '&deg' + 'C';
            document.querySelector('#range-temp').append(p);
        });

        document.querySelector('#description').textContent = data.weather[0].description;

        const img = document.createElement('img');
        img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        document.querySelector('#feature li').append(img);

        const arrayScorekeeper = [
            'Temperature, °C:',
            'feels like:',
            'pressure, mm:',
            'humidity, %:',
            'wind, m/s:'
        ];

        arrayScorekeeper.forEach(scorekeeper => {
            const li = document.createElement('li');
            li.innerHTML = scorekeeper;
            document.querySelector('#score').append(li);
        });

        const arrayInfo = [];

        arrayInfo.push(Math.round(data.main.temp - 273) + '&deg', Math.round(data.main.feels_like - 273) + '&deg', data.main.pressure, data.main.humidity, `<img src="arrow.png"> ${data.wind.speed}`);


        arrayInfo.forEach(info => {
            const li = document.createElement('li');
            li.innerHTML = info;
            document.querySelector('#info').append(li);
        });

        document.querySelector('#info img').style.transform = `rotate(${data.wind.deg}deg)`;

    });
const detailedInfo = document.querySelector('#detailed-info');

detailedInfo.style.display = 'none';

document.querySelector('#detailed-button').onclick = () => {

    if (detailedInfo.style.display === 'none') {
        detailedInfo.style.display = 'block';
    } else if (detailedInfo.style.display === 'block') {
        detailedInfo.style.display = 'none';
    }
}

// https://openweathermap.org/

// XnView