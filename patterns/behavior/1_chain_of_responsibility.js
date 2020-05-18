class Sum {
    constructor(initialValue = 50) {
        this.sum = initialValue
    }

    add(value) {
        this.sum += value;
        return this;
    }
}

const sum = new Sum();

console.log(sum.add(10).add(43).add(43).sum); // 156