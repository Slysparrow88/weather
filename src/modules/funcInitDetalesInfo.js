function funcInitDetalesInfo(data) {
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

    arrayInfo.push(Math.round(data.main.temp - 273) + '&deg', Math.round(data.main.feels_like - 273) + '&deg', data.main.pressure * 0.75, data.main.humidity, `<img src="./img/arrow.png"> ${data.wind.speed}`);


    arrayInfo.forEach(info => {
        const li = document.createElement('li');
        li.innerHTML = info;
        document.querySelector('#info').append(li);
    });

    document.querySelector('#info img').style.transform = `rotate(${data.wind.deg}deg)`;
}
export default funcInitDetalesInfo;