const Vehicle = require("../models/vehicle").Vehicle;
const vehicleStore = require("../store/vehicle-store.json");

const vehicles = [];
vehicleStore.forEach((vehicle) => vehicles.push(new Vehicle(vehicle)))

module.exports.vehicles = vehicles;