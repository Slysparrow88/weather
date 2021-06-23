function createChart(inf) {

    let nanDate = '';

    for (let i = 0; i < 7; i++) {
        let item = inf.daily[i];

        let date = new Date(item.dt * 1000);
        nanDate = date.getDay();

        if (nanDate === 0) {
            nanDate = 7;
        }
        let tempLine = '';
        tempLine += item.temp.day - 273;

        var arrayTemp = [];
        var arrayDates = [];

        arrayTemp.push(tempLine);
        arrayDates.push(nanDate);


        renderChart(arrayTemp, arrayDates);
    }


    function renderChart(arrayTemp, arrayDates) {



        console.log(arrayTemp);
        console.log(arrayDates);

        const data = {
            labels: arrayDates,
            datasets: [{
                animation: false,
                pointRadius: 0,
                label: 'Diagram',
                data: arrayTemp,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(128, 99, 255)',
                color: 'rgb(128, 99, 255)',
            }
            ]
        }
        // const ctx = document.querySelector('#data-graph').getContext('2d');

        // new Chart(ctx, {
        //     type: 'line',
        //     data: data,
        //     options: {
        //         scales: {
        //             y: {
        //                 beginAtZero: true
        //             }
        //         }
        //     },
        // });
    }
}
export default createChart;



// const btn_upload = document.querySelector('#btn-upload-csv');

// btn_upload.onclick = () => {

//     let ctx = document.querySelector('#data-graph');
//     ctx.style.display = 'block';
//     let blockButton = document.querySelector('#block-buttons');
//     blockButton.style.display = 'block';

//     Papa.parse(document.querySelector('#upload-csv').files[0], {
//         worker: true,
//         download: true,
//         header: false,
//         complete: function (results, resOne, resTwo) {

//             var resOne = [];
//             var resTwo = [];

//             results.data.map((data) => {

//                 let variantOne = data.slice(0, 1);
//                 let variantTwo = data.slice(1, 2);

//                 resOne.push(variantOne[0]);
//                 resTwo.push(variantTwo[0]);
//             });

//             createChart(resOne, resTwo);
//         }
//     });
// };
// let chart = document.querySelector('#data-graph');
// let less = document.querySelector('#less');
// let more = document.querySelector('#more');
// chart.style.width = '1300px';

// less.onclick = () => {
//     let chart = document.querySelector('#data-graph');

//     let a = parseInt(chart.style.width);
//     let result = a - 50 + 'px';
//     chart.style.width = result;
// };
// more.onclick = () => {
//     let chart = document.querySelector('#data-graph');

//     let a = parseInt(chart.style.width);
//     let result = a + 50 + 'px';
//     chart.style.width = result;
// };

// function createChart(resOne, resTwo) {

//     resOne.unshift('0');
//     resTwo.unshift('0');

//     const data = {
//         labels: resOne,
//         datasets: [{
//             animation: false,
//             pointRadius: 0,
//             label: 'Diagram',
//             data: resTwo,
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(128, 99, 255)',
//             color: 'rgb(128, 99, 255)',
//         }
//         ]
//     }
//     const ctx = document.querySelector('#data-graph').getContext('2d');
//     const chart = new Chart(ctx, {
//         type: 'line',
//         data: data,
//         options: {
//             layout: {
//                 padding: 50,
//             },
//             plugins: {
//                 legend: {
//                     labels: {
//                         font: {
//                             size: 20
//                         }
//                     }
//                 }
//             }
//         }
//     });
// }