const Validation = require("../utils/validation")

class DoublyLinkedList {
    constructor(value) {
        this.head = this._buildNode(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = this._buildNode(value)
        newNode.previous = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = this._buildNode(value)
        newNode.next = this.head
        this.head.previous = newNode
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
            currentNode.previous = newNode
            newNode.previous = previousNode
            previousNode.next = newNode
            this.length++
            return this
        })
    }

    _iterateAndExecute(position, executeCallback) {
        const shouldTraverseToEnd = position <= this.length / 2
        console.log(shouldTraverseToEnd, position, this.length)

        if (position <= this.length - 1 / 2) {
            this._traverseToEnd(position, executeCallback)
        } else {
            this._traverseBackwards(position, executeCallback)
        }
    }



    _traverseToEnd(position, executeCallback) {
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

    _traverseBackwards(position, executeCallback) {
        let index = this.length - 1
        let previousNode = this.tail.previous
        let currentNode = this.tail

        while (currentNode !== null) {
            if (index === position) {
                return executeCallback(previousNode, currentNode)
            }
            previousNode = currentNode
            currentNode = currentNode.previous
            index++
        }
    }

    shift() {
        if (this.length === 1) throw "Can't have an empty linked list"
        const oldValue = this.head.value
        this.head = this.head.next
        this.head.previous = null
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
            const nextNode = currentNode.next
            previousNode.next = nextNode
            nextNode.previous = previousNode
            this.length--
            return currentNode.value
        })
    }

    values(isReversed = false) {
        const values = []
        let currentNode = isReversed ? this.tail : this.head
        while (currentNode !== null) {
            values.push(currentNode.value)
            currentNode = isReversed ? currentNode.previous : currentNode.next
        }
        return values
    }

    _buildNode(value) {
        return {
            next: null,
            previous: null,
            value
        }
    }
}


const l = new DoublyLinkedList(1)
