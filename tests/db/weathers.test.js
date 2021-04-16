const weathers = require("../../db/weathers");

test("weathers | getWeatherByName | Should Throw an exception Weather Does Not Exist", () => {
    expect(() => weathers.getWeatherByName("Dry")).toThrow("Weather Does Not Exist")
})

test("weathers | getWeatherByName | Should Return the Sunny Weather Object", () => {
    let weather = weathers.getWeatherByName("Sunny");
    expect(weather.getName()).toBe("Sunny")
})