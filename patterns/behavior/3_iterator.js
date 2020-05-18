class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {
                        value: void 0,
                        done: true
                    }
                }
            }
        }
    }
}

// the same
function* generator(collection) { 
  let index = 0;

  while (index < collection.length) {
      yield collection[index++]
  }
}

const iterator = new MyIterator(['This', 'class', 'is', 'iterator']);
const gen = generator(['This', 'class', 'is', 'iterator']);

console.log(gen.next())  //{ value: 'This', done: false }
console.log(gen.next()); //{ value: 'class', done: false }
console.log(gen.next()); //{ value: 'is', done: false }
