class Vehicle {
    constructor(obj){
        Object.keys(obj).forEach((key) => this[key] = obj[key]);
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getSpeed(){
        return this.speed;
    }

    setSpeed(speed){
        this.speed = speed;
    }

    getCraterCrossTime(){
        return this.craterCrossTime;
    }

    setCraterCrossTime(craterCrossTime){
        this.craterCrossTime = craterCrossTime;
    }

    getRank(){
        return this.rank;
    }

    setRank(rank){
        this.rank = rank;
    }
}

module.exports.Vehicle = Vehicle;