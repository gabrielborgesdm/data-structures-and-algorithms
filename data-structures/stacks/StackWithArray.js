const MyArray = require("../arrays/MyArray")

class Stack {
    constructor() {
        this.data = new MyArray()
    }

    enqueue(item) {
        return this.data.push(item)
    }

    dequeue() {
        return this.data.pop()
    }

    peek() {
        return this.data.get(this.data.length - 1)
    }

    values() {
        return this.data.values()
    }
}