const LinkedList = require("../linked-lists/linked-list")

class Queue {
    constructor(item) {
        this.data = new LinkedList(item)
    }

    enqueue(item) {
        return this.data.append(item)
    }

    dequeue() {
        return this.data.shift()
    }

    peek() {
        return this.data.get(this.data.length - 1)
    }

    values() {
        return this.data.values()
    }
}

