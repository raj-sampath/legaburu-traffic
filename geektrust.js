const vehicles = require("./db/vehicles").vehicles;
const orbits = require("./db/orbits").orbits;
const weatherDb = require("./db/weathers");
const orbitDB = require("./db/orbits");
const trafficHelper = require("./helper/traffic-helper");

let input = trafficHelper.getInputString();

let inputArray = input.split(" ");

let weather = null;
let result = null;

for(let i = 0; i < inputArray.length; i++ ){
    if(i === 0){
        weather = weatherDb.getWeatherByName(inputArray[i]);
    }
    else{
        let trafficSpeed = Number(inputArray[i]);
        orbitDB.setOrbitData("Orbit" + i, { trafficSpeed });
    }
}

vehicles.forEach((vehicle) => {
    if(trafficHelper.safeToTravel(vehicle, weather)){
        orbits.forEach((orbit) => {
            let obj = trafficHelper.timeToCompleteOrbit(orbit, vehicle, weather);

            if((result === null) || (result.time > obj.time)){
                result = obj;
            }

            if(result.time === obj.time && result.rank > obj.rank){
                result = obj;
            }
        })
    }
})

console.log(result.vehicle.toUpperCase(), result.orbit.toUpperCase())







