const trafficHelper = require("../../helper/traffic-helper");
const Orbit = require("../../models/orbit").Orbit;
const Vehicle = require("../../models/vehicle").Vehicle;
const Weather = require("../../models/weather").Weather;

test("traffic-helper | getClassName | Should Return Orbit Class Name for Orbit Object", () => {
    expect(trafficHelper.getClassName(new Orbit( {name: "Test Orbit"}))).toBe(trafficHelper.CLASS_NAME_ORBIT)
})

test("traffic-helper | getClassName | Should Return Vehicle Class Name for Vehicle Object", () => {
    expect(trafficHelper.getClassName(new Vehicle( {name: "Test Vehicle"}))).toBe(trafficHelper.CLASS_NAME_VEHICLE)
})

test("traffic-helper | getClassName | Should Return Weather Class Name for Weather Object", () => {
    expect(trafficHelper.getClassName(new Weather( {name: "Test Weather"}))).toBe(trafficHelper.CLASS_NAME_WEATHER)
})

test("traffic-helper | getClassName | Should Throw Error For Null / Undefined", () => {
    expect(() => trafficHelper.getClassName( null )).toThrow()
})

test("traffic-helper | getClassName | Should Throw Error For Not an Object", () => {
    expect(() => trafficHelper.getClassName( 12345 )).toThrow()
})

test("traffic-helper | safeToTravel | Should Throw Not a Vehicle Object", () => {
    expect(() => trafficHelper.safeToTravel(new Weather({
        "name": "Rainy",
        "craterIncreasePercentage": 20
    }), new Weather({
        "name": "Rainy",
        "craterIncreasePercentage": 20
    }))).toThrow()
})

test("traffic-helper | safeToTravel | Should Throw Not a Weather Object", () => {
    expect(() => trafficHelper.safeToTravel(new Vehicle({
        "name": "Bike",
        "speed": 10,
        "craterCrossTime": 2,
        "rank": 1
    }), new Vehicle({
        "name": "Bike",
        "speed": 10,
        "craterCrossTime": 2,
        "rank": 1
    }))).toThrow()
})

test("traffic-helper | safeToTravel | Should be truthy (Bike, Sunny)", () => {
    expect(trafficHelper.safeToTravel(new Vehicle({
        "name": "Bike",
        "speed": 10,
        "craterCrossTime": 2,
        "rank": 1
    }), new Weather({
        "name": "Sunny",
        "craterIncreasePercentage": -10
    }))).toBeTruthy()
})

test("traffic-helper | safeToTravel | Should be Falsy (Bike, Rainy)", () => {
    expect(trafficHelper.safeToTravel(new Vehicle({
        "name": "Bike",
        "speed": 10,
        "craterCrossTime": 2,
        "rank": 1
    }), new Weather({
        "name": "Rainy",
        "craterIncreasePercentage": 20
    }))).toBeFalsy()
})

test("traffic-helper | getInputString | Should Read input.txt and return the data", () => {
    process.argv[2] = "input.txt"
    expect(trafficHelper.getInputString()).toBe("SUNNY 12 10")
})

test("traffic-helper | getInputString | Should Throw File Does not Exist Error", () => {
    process.argv[2] = "input1.txt"
    expect(() => trafficHelper.getInputString()).toThrow("File does not Exist")
})

test("traffic-helper | getVehiclesForWeather | Should Throw Not a Weather Object Error", () => {
    process.argv[2] = "input.txt"
    expect(() => trafficHelper.getVehiclesForWeather(new Vehicle({
        "name": "Bike",
        "speed": 10,
        "craterCrossTime": 2,
        "rank": 1
    }))).toThrow("Not a Weather Object")
})

test("traffic-helper | getVehiclesForWeather | Should Read return an array with Car and TukTuk", () => {
    process.argv[2] = "input.txt"
    expect(trafficHelper.getVehiclesForWeather(new Weather({
        "name": "Rainy",
        "craterIncreasePercentage": 20
    })).allowedVehicles).toEqual( ["Tuktuk", "Car"])
})