function createChart(info) {

    let arrayTemp = [];
    let arrayDates = [];

    for (let i = 0; i < 7; i++) {
        let item = info.daily[i];
        // Add temperature-------------------------------------------------
        let temp = Math.round(item.temp.day - 273);
        arrayTemp.push(temp);
        // Add date--------------------------------------------------------
        let date = new Date(item.dt * 1000);
        let numDate = date.toString().substr(3, 7);
        arrayDates.push(numDate);
    }
    renderChart(arrayTemp, arrayDates);
        
    // Create the chart----------------------------------------------------
    function renderChart(xValue, yValue) {

        const ctx = document.querySelector('#data-graph').getContext('2d');
        const chart = document.querySelector('#data-graph');
        const config = chart.style;

        config.width = '100%';
        config.height = '400px';
        config.position = 'absolute';
        config.backgroundColor = 'rgba(97, 179, 255, 0.5)';

        const data = {
            labels: yValue,
            datasets: [{
                data: xValue,
                fill: 'origin',
                borderColor: ['rgba(255, 137, 27, 0.5)'],
                backgroundColor: ['rgba(255, 137, 27, 0.65)'],
                borderCapStyle: 'round',
                pointRadius: 0,
                pointBackgroundColor: "rgba(255, 137, 27, 0.5)",
                pointRadius: 2,
            }
            ]
        }
        const scales = {
            x: {
                ticks: {
                    color: 'rgb(255, 137, 27)',
                    font: {
                        size: 15,
                        weight: 'bold'
                    }
                },
                grid: {
                    tickColor: 'rgb(255, 137, 27)',
                    borderWidth: 2,
                    borderColor: 'rgb(255, 137, 27)'
                },
                title: {
                    display: true,
                    text: 'Day',
                    color: 'white',
                    font: {
                        size: 16,
                    }
                }
            },
            y: {
                max: 40,
                min: -30,
                ticks: {
                    color: 'rgb(255, 137, 27)',
                    font: {
                        size: 15,
                        weight: 'bold'
                    }
                },
                grid: {
                    textColor: 'rgb(255, 137, 27)',
                    tickColor: 'rgb(255, 137, 27)',
                    borderWidth: 2,
                    borderColor: 'rgb(255, 137, 27)'
                },
                title: {
                    display: true,
                    text: 'Temperature, ' + '°C',
                    color: 'white',
                    font: {
                        size: 16,
                    }
                }
            },
        }
        const plugins = {
            title: {
                display: true,
                text: 'Temperature graph',
                color: 'white',
                font: {
                    size: 16,
                },
            },
            legend: {
                display: false,
                text: 'Temperature',
                labels: {
                    color: 'black'
                }
            }
        }
        new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                showLine: true,
                animation: false,
                scales: scales,
                plugins: plugins
            },
        });

    }
}
export default createChart;