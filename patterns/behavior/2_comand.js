class MathNum {
    constructor(initialValue = 2) {
        this.number = initialValue
    }

    square() {
        return this.number ** 2
    }

    cube() {
        return this.number ** 3
    }
}

class Comand {
    constructor(subject) {
        this.subject = subject
        this.comandExucuted = []
    }

    execute(command) {
        this.comandExucuted.push(command);
        return this.subject[command]();
    }
}

const x = new Comand(new MathNum(32));

console.log(x.execute('square')); // 1024
console.log(x.execute('cube')); // 32768

console.log(x.comandExucuted); // [ 'square', 'cube' ]
