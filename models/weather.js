class Weather {
    constructor(obj){
        Object.keys(obj).forEach((key) => this[key] = obj[key]);
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getCraterIncreasePercentage(){
        return this.craterIncreasePercentage;
    }

    setCraterIncreasePercentage(craterIncreasePercentage){
        this.craterIncreasePercentage = craterIncreasePercentage;
    }
}

module.exports.Weather = Weather;