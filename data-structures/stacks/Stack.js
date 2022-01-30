
class Stack {
    constructor() {
        this.bottom = null
        this.top = null
        this.length = 0
    }

    push(item) {
        const newNode = this._buildNode(item)
        if (!this.top) {
            this.top = newNode
            this.bottom = this.top
        } else {
            newNode.next = this.top
            this.top = newNode
        }

        return ++this.length
    }

    pop() {
        if (!this.length) return null
        const value = this.top.value
        this.top = this.top.next
        this.length--
        return value
    }

    peek() {
        return this.top.value
    }

    values() {
        const values = []
        let currentNode = this.top
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
