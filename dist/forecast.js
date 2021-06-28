/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/forecast.js":
/*!****************************!*\
  !*** ./src/js/forecast.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_func_init_weekly_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/func_init_weekly.js */ \"./src/modules/func_init_weekly.js\");\n/* harmony import */ var _modules_func_init_chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/func_init_chart.js */ \"./src/modules/func_init_chart.js\");\n\r\n\r\n\r\nfunction requestCurrentWeather() {\r\n    fetch('http:////api.openweathermap.org/data/2.5/onecall?lat=48.45&lon=34.9833&exclude=current,minutely,hourly,alerts&appid=7d1bad29c4c3b8d926f79f97c6fddad7')\r\n        .then(function (resp) { return resp.json() })\r\n        .then(function (data) {\r\n            (0,_modules_func_init_weekly_js__WEBPACK_IMPORTED_MODULE_0__.default)(data);\r\n            (0,_modules_func_init_chart_js__WEBPACK_IMPORTED_MODULE_1__.default)(data);\r\n        });\r\n}requestCurrentWeather()\n\n//# sourceURL=webpack://weather/./src/js/forecast.js?");

/***/ }),

/***/ "./src/modules/func_init_chart.js":
/*!****************************************!*\
  !*** ./src/modules/func_init_chart.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createChart(info) {\r\n\r\n    let arrayTemp = [];\r\n    let arrayDates = [];\r\n\r\n    for (let i = 0; i < 7; i++) {\r\n        let item = info.daily[i];\r\n        // Add temperature-------------------------------------------------\r\n        let temp = Math.round(item.temp.day - 273);\r\n        arrayTemp.push(temp);\r\n        // Add date--------------------------------------------------------\r\n        let date = new Date(item.dt * 1000);\r\n        let numDate = date.toString().substr(3, 7);\r\n        arrayDates.push(numDate);\r\n    }\r\n    renderChart(arrayTemp, arrayDates);\r\n        \r\n    // Create the chart----------------------------------------------------\r\n    function renderChart(xValue, yValue) {\r\n\r\n        const ctx = document.querySelector('#data-graph').getContext('2d');\r\n        const chart = document.querySelector('#data-graph');\r\n        const config = chart.style;\r\n\r\n        config.width = '100%';\r\n        config.height = '400px';\r\n        config.position = 'absolute';\r\n        config.backgroundColor = 'rgba(97, 179, 255, 0.5)';\r\n\r\n        const data = {\r\n            labels: yValue,\r\n            datasets: [{\r\n                data: xValue,\r\n                fill: 'origin',\r\n                borderColor: ['rgba(255, 137, 27, 0.5)'],\r\n                backgroundColor: ['rgba(255, 137, 27, 0.65)'],\r\n                borderCapStyle: 'round',\r\n                pointRadius: 0,\r\n                pointBackgroundColor: \"rgba(255, 137, 27, 0.5)\",\r\n                pointRadius: 2,\r\n            }\r\n            ]\r\n        }\r\n        const scales = {\r\n            x: {\r\n                ticks: {\r\n                    color: 'rgb(255, 137, 27)',\r\n                    font: {\r\n                        size: 15,\r\n                        weight: 'bold'\r\n                    }\r\n                },\r\n                grid: {\r\n                    tickColor: 'rgb(255, 137, 27)',\r\n                    borderWidth: 2,\r\n                    borderColor: 'rgb(255, 137, 27)'\r\n                },\r\n                title: {\r\n                    display: true,\r\n                    text: 'Day',\r\n                    color: 'white',\r\n                    font: {\r\n                        size: 16,\r\n                    }\r\n                }\r\n            },\r\n            y: {\r\n                max: 40,\r\n                min: -30,\r\n                ticks: {\r\n                    color: 'rgb(255, 137, 27)',\r\n                    font: {\r\n                        size: 15,\r\n                        weight: 'bold'\r\n                    }\r\n                },\r\n                grid: {\r\n                    textColor: 'rgb(255, 137, 27)',\r\n                    tickColor: 'rgb(255, 137, 27)',\r\n                    borderWidth: 2,\r\n                    borderColor: 'rgb(255, 137, 27)'\r\n                },\r\n                title: {\r\n                    display: true,\r\n                    text: 'Temperature, ' + '°C',\r\n                    color: 'white',\r\n                    font: {\r\n                        size: 16,\r\n                    }\r\n                }\r\n            },\r\n        }\r\n        const plugins = {\r\n            title: {\r\n                display: true,\r\n                text: 'Temperature graph',\r\n                color: 'white',\r\n                font: {\r\n                    size: 16,\r\n                },\r\n            },\r\n            legend: {\r\n                display: false,\r\n                text: 'Temperature',\r\n                labels: {\r\n                    color: 'black'\r\n                }\r\n            }\r\n        }\r\n        new Chart(ctx, {\r\n            type: 'line',\r\n            data: data,\r\n            options: {\r\n                showLine: true,\r\n                animation: false,\r\n                scales: scales,\r\n                plugins: plugins\r\n            },\r\n        });\r\n\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createChart);\n\n//# sourceURL=webpack://weather/./src/modules/func_init_chart.js?");

/***/ }),

/***/ "./src/modules/func_init_weekly.js":
/*!*****************************************!*\
  !*** ./src/modules/func_init_weekly.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderForecast(data) {\r\n    let forecastDataContainer = document.querySelector('#forecast');\r\n    let forecasts = '';\r\n\r\n    for (let i = 0; i < 7; i++) {\r\n        let item = data.daily[i];\r\n\r\n        //get date--------------------------------------------------------------------\r\n        let date = new Date(item.dt * 1000);\r\n        let getMonth = date.toString().substr(0, 3);\r\n        let getDate = date.toString().substr(4, 7);\r\n        let initDate = getMonth + ', ' + getDate;\r\n        //get icon--------------------------------------------------------------------  \r\n        const img = document.createElement('img');\r\n        img.src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;\r\n        //get temperature-------------------------------------------------------------\r\n        let temperature = Math.round(item.temp.day - 273) + '&deg' + 'C';\r\n        // set to DOM-----------------------------------------------------------------\r\n        let template = `<div class=\"forecast-item\">\r\n            <div id=\"day-one\" class=\"forecast-time\">${initDate}</div>\r\n            <div class=\"forecast-icon\"><img src=\"${img.src}\"></div>\r\n            <div class=\"forecast-temperature\">${temperature}</div>\r\n        </div>`;\r\n        forecasts += template;\r\n    };\r\n    forecastDataContainer.innerHTML = forecasts;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderForecast);\n\n//# sourceURL=webpack://weather/./src/modules/func_init_weekly.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/forecast.js");
/******/ 	
/******/ })()
;