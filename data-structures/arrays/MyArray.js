const ValidationBuilder = require("../utils/validation")

class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {

        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        return ++this.length
    }

    pop() {
        if (this.length === 0) return null
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    delete(index) {
        const deletedItem = this.data[index]
        this.shiftItems(index)
        return deletedItem
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

    values() {
        const listOfValues = []
        for (let i = 0; i < this.length; i++) {
            listOfValues.push(this.data[i])
        }
        return listOfValues
    }
}

module.exports = MyArray

