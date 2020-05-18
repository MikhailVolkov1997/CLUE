class Vehicle {
    travelTime() {
       return this.timeTaken
    }
}

class Bus extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 32
    }
}

class Taxi extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 23
    }
}

class Car extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 11
    }
}

class Commute {
    travel(transport) {
        return transport.travelTime()
    }
}

const commute = new Commute();

console.log(commute.travel(new Taxi())); // 23