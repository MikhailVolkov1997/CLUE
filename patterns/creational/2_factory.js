class BaseMembership {
    constructor(name) {
        this.name = name
        this.price = 50
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name
        this.price = 200
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.price = 500
    }
}

class Factory {
    static list = {
        base: BaseMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name, type = 'base') {
        const Membership = Factory.list[type] || Factory.list.base;
        const member = new Membership(name);

        member.get = function() {
            return `this.name: ${this.name} ${this.price}`
        }

        return member;
    }
}

const factory = new Factory();

const members = [
    factory.create('Mik', 'standard').get(),
    factory.create('Anna', 'premium').get()
]
