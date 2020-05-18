function Server(name, id) {
    this.name = name;
    this.id = id
}

Server.prototype.get = function() {
    return `http//${this.name}/:${this.id}`
}

const apach = new Server('Apach', '65.54.32.65');

//////////////////////// class

class ServerClass {
    constructor(name, id) {
        this.name = name
        this.id = id
    }

    getUrl = () => `http//${this.name}/:${this.id}`
    
}

const apachClass = new ServerClass('ApachClass', '43.43.54.43')
console.log(apachClass)
