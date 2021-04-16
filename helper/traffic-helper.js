const fs = require("fs");

const weatherVehicleMapping = require("../store/weather-vehicle-store.json");

const CLASS_NAME_VEHICLE = "Vehicle";
const CLASS_NAME_WEATHER = "Weather";
const CLASS_NAME_ORBIT = "Orbit";

const getClassName = (obj) => {
    if(obj === undefined || obj === null)
        throw new Error("Object is Null or Undefined");
    else{
        if(typeof obj === "object")
            return obj.constructor.name;
        else
            throw new Error("Not an Object")
    }
}

const getVehiclesForWeather = (weather) => {
    if(getClassName(weather) !== CLASS_NAME_WEATHER){
        throw new Error("Not a Weather Object")
    }
    else{
        return weatherVehicleMapping.find((mapping) => mapping.weather === weather.getName())
    }
}

module.exports = {

    safeToTravel: (vehicle, weather) => {

        if(getClassName(vehicle) !== CLASS_NAME_VEHICLE)
            throw new Error("Not a Vehicle Object")

        if(getClassName(weather) !== CLASS_NAME_WEATHER)
            throw new Error("Not a Weather Object")

        let weatherVehicles = getVehiclesForWeather(weather);
        return weatherVehicles.allowedVehicles.some((allowedVehicle) => allowedVehicle === vehicle.getName())
    },
    timeToCompleteOrbit: (orbit, vehicle, weather) => {

        let travelSpeed = vehicle.getSpeed();
        if(travelSpeed > orbit.getTrafficSpeed()){
            travelSpeed = orbit.getTrafficSpeed();
        }

        let numberOfCraters = orbit.getNumberOfCraters() + ((orbit.getNumberOfCraters() * weather.getCraterIncreasePercentage()) / 100);
        let craterCoverageTime = (numberOfCraters * vehicle.getCraterCrossTime()) / 60;

        let vehicleDistanceCoverageTime = orbit.getDistance() / travelSpeed;
        let timeTaken = vehicleDistanceCoverageTime + craterCoverageTime;

        // return {
        //     vehicle: vehicle.getName(),
        //     vehicleCreateCrossTime: vehicle.getCraterCrossTime(),
        //     vehicleSpeed: vehicle.getSpeed(),
        //     orbit: orbit.getName(),
        //     orbitDistance: orbit.getDistance(),
        //     orbitCraters: orbit.getNumberOfCraters(),
        //     actualCraters:numberOfCraters,
        //     time: timeTaken
        // };

        return {
            vehicle: vehicle.getName(),
            orbit: orbit.getName(),
            time: timeTaken,
            rank: vehicle.getRank()
        };
    },
    getInputString: () => {
        try{
            let fileName = process.argv[process.argv.length - 1];
            if(fs.existsSync(fileName)) return fs.readFileSync(fileName).toString();
            else throw new Error("File does not Exist");
        }
        catch (e){
            throw new Error("Error Occurred While Reading Input File " + e.message)
        }
    },
    getClassName,
    getVehiclesForWeather,
    CLASS_NAME_VEHICLE,
    CLASS_NAME_WEATHER,
    CLASS_NAME_ORBIT
}