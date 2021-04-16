const Orbit = require("../models/orbit").Orbit;
const orbitStore = require("../store/orbit-store.json");

const orbits = [];
orbitStore.forEach((orbit) => orbits.push(new Orbit(orbit)))

const setOrbitData = (orbitName, obj) => {
    let orbitToUpdate = orbits.find((orbit) => orbit.getName().toLowerCase() === orbitName.toLowerCase())
    if(!orbitToUpdate){
        throw new Error(`${orbitName} does not exist`)
    }
    else{
        let keys = Object.keys(obj);
        keys.forEach((key) => {
            let functionName = "set" + key.charAt(0).toUpperCase() + key.slice(1);
            if(typeof orbitToUpdate[functionName] === "function"){
                orbitToUpdate[functionName](obj[key]);
            }
        })
    }
}

module.exports.orbits = orbits;
module.exports.setOrbitData = setOrbitData;