const path = require('path');

module.exports = {
    mode: 'development',
    entry: {     
        weather: './src/js/weather.js',
        forecast: './src/js/forecast.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}
