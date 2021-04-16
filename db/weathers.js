const Weather = require("../models/weather").Weather;
const weatherStore = require("../store/weather-store.json");

const weathers = [];
weatherStore.forEach((weather) => weathers.push(new Weather(weather)))

const getWeatherByName = (name) => {
    let weather = weathers.find((weather) => weather.getName().toLowerCase() === name.toLowerCase())
    if(weather) return weather
    else throw new Error("Weather Does Not Exist")
}

module.exports.weathers = weathers;
module.exports.getWeatherByName = getWeatherByName;