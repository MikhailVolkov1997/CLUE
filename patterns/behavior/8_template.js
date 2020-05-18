class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} is working`
    }

    getPaid() {
        return `${this.name} have ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return `working on program`
    }
}