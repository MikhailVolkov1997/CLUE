class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    recive(message, from) {
      console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
      this.users[user.name] = user;
      user.room = this;
    }

    send(message, from, to) {
      if (to) {
          to.recive(message, from)
      } else {
          Object.keys(this.users)
          .forEach(key => {
            if (this.users[key] !== from) {
                this.users[key].recive(message, from)
            }
          })
      }
    }
}

const user1 = new User('Sem');
const user2 = new User('Dean');
const user3 = new User('Castiel');

const room = new ChatRoom();

room.register(user1);
room.register(user2);
room.register(user3);

user1.send('Hey', user2); // Sem => Dean: Hey
user1.send('Hello everyone'); // Sem => Dean: Hello everyone, Sem => Castiel: Hello everyone