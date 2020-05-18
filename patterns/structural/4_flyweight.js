class Car {
    constructor(model, color) {
        this.model = model
        this.color = color
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }

    create(model, color) {
      const candidate = this.getCar(model);
      if (candidate) {
          return candidate;
      }

      const newCar = new Car(model, color);
      this.cars.push(newCar);
      return newCar;
    }

    getCar(model) {
      return this.cars.find(car => car.model === model)
    }
}

const factory = new CarFactory();

console.log(factory.create('bmw', 'red')); // Car { model: 'bmw', color: 'red' }
console.log(factory.create('audi', 'red')); // Car { model: 'audi', color: 'red' }
console.log(factory.create('bmw', 'blue')); // Car { model: 'bmw', color: 'red' }
