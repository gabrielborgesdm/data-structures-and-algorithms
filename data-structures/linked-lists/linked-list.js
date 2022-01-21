const Validation = require("../utils/validation")

class LinkedList {
    constructor(value) {
        this.head = this._buildNode(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = this._buildNode(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = this._buildNode(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    insert(position, value) {
        Validation("position", position).isBetween(0, this.length - 1)
        if (position === 0) return this.prepend(value)
        else if (position === this.length - 1) return this.append(value)

        const newNode = this._buildNode(value)
        return this._iterateAndExecute(position, (previousNode, currentNode) => {
            newNode.next = currentNode
            previousNode.next = newNode
            this.length++
            return this
        })
    }

    _iterateAndExecute(position, executeCallback) {
        let index = 1
        let previousNode = this.head
        let currentNode = this.head.next

        while (currentNode !== null) {
            if (index === position) {
                return executeCallback(previousNode, currentNode)
            }
            previousNode = currentNode
            currentNode = currentNode.next
            index++
        }
    }

    shift() {
        if (this.length === 1) throw "Can't have an empty linked list"
        const oldValue = this.head.value
        this.head = this.head.next
        this.length--
        return oldValue
    }

    pop() {
        if (this.length === 1) throw "Can't have an empty linked list"

        return this._iterateAndExecute(this.length - 1, (previousNode, currentNode) => {
            this.tail = previousNode
            previousNode.next = null
            this.length--
            return currentNode.value
        })
    }

    remove(position) {
        Validation("position", position).isBetween(0, this.length - 1)

        if (position === 0) return this.shift()
        else if (position === this.length - 1) return this.pop()
        else if (this.length === 1) throw "Can't have an empty linked list"

        return this._iterateAndExecute(position, (previousNode, currentNode) => {
            previousNode.next = currentNode.next
            this.length--
            return currentNode.value
        })
    }

    values() {
        const values = []
        let currentNode = this.head
        while (currentNode !== null) {
            values.push(currentNode.value)
            currentNode = currentNode.next
        }
        return values
    }

    reverse() {
        let firstNode = this.head
        let secondNode = firstNode.next
        while (secondNode !== null) {
            const temp = secondNode.next
            secondNode.next = firstNode
            firstNode = secondNode
            secondNode = temp
        }
        this.head.next = null
        this.tail = this.head
        this.head = firstNode

        return this.values()
    }

    _buildNode(value) {
        return {
            next: null,
            value
        }
    }
}

module.exports = LinkedList