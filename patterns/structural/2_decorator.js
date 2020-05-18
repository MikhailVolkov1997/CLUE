class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAws = true;
    server.info = function() {
        return server.url
    }
    return server
}

const server = new Server('54.34.21.43', '8000');
const awsServer = aws(server);

console.log(awsServer.isAws); // true
console.log(awsServer.info()); //https://54.34.21.43:8000