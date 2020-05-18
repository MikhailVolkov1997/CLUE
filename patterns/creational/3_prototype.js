const car = {
    wheels: 6,
    init() { 
        return`I have ${this.wheels} wheels. My boss ${this.owner}`
    }
}

const carWithOwner = Object.create(car, {
    owner:{
        value: "Sem"
    }
})

console.log(carWithOwner.__proto__) // carWithOwner.__proto__ === car