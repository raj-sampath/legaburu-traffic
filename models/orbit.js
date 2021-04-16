class Orbit {
    constructor(obj){
        Object.keys(obj).forEach((key) => this[key] = obj[key]);
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getDistance(){
        return this.distance;
    }

    setDistance(distance){
        this.distance = distance;
    }

    getNumberOfCraters(){
        return this.numberOfCraters;
    }

    setNumberOfCraters(numberOfCraters){
        this.numberOfCraters = numberOfCraters;
    }

    getTrafficSpeed(){
        return this.trafficSpeed;
    }

    setTrafficSpeed(trafficSpeed){
        this.trafficSpeed = trafficSpeed;
    }
}

module.exports.Orbit = Orbit;