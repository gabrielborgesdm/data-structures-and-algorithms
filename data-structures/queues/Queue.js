
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }


    enqueue(item) {
        const newNode = this._buildNode(item)
        if (!this.last) {
            this.last = newNode
            this.first = this.last
        } else {
            this.last.next = newNode
            this.last = this.last.next
        }
        return ++this.length
    }

    dequeue() {
        if (!this.length) return null
        const oldValue = this.first.value
        this.first = this.first.next
        this.length--
        return oldValue
    }

    peek() {
        return this.first.value
    }

    values() {
        const values = []
        let currentNode = this.first
        while (currentNode) {
            values.push(currentNode.value)
            currentNode = currentNode.next
        }
        return values
    }

    _buildNode(value) {
        return {
            value,
            next: null
        }
    }
}
