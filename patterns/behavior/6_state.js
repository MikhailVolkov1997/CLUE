class Light {
    constructor(light) {
        this.light = light
    }
}

class Yellow extends Light {
    constructor() {
        super('yellow')
    }

    sign() {
      return "ATTENTION"
    }

}
class Green extends Light {
    constructor() {
        super('green')
    }

    sign() {
      return "GO"
    }

}

class Red extends Light {
    constructor() {
        super('red')
    }

    sign() {
      return "STOP"
    }
}

class TrafficLight {
    constructor() {
        this.state = [
           new Red(),
           new Yellow(),
           new Green()
        ]
        this.current = this.state[0]
    }

    change() {
        const total = this.state.length;
        let index = this.state.findIndex(light => light === this.current);

        if (index + 1 < total) {
            this.current = this.state[index + 1]
        } else {
            this.current = this.state[0]

        }
    }

    sign() {
        return this.current.sign();
    }
}

const traffic = new TrafficLight();

console.log(traffic.sign()); // STOP
traffic.change();
console.log(traffic.sign()); // ATTENTION

