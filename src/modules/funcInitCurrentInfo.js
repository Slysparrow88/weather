function funcInitCurrentInfo(data) {
    let date = new Date(data.dt * 1000);

    let getMonth = date.toString().substr(0, 3);
    let getDate = date.toString().substr(4, 7);
    let initDate = getMonth + ', ' + getDate;

    document.querySelector('#current-date').textContent = initDate;
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

}
export default funcInitCurrentInfo;