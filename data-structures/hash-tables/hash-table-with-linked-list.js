const LinkedList = require("../linked-lists/linked-list")

const MyHashTable = () => {
    return {
        data: new Array(10),
    
        _hashKeyIntoIndex(key) {
            let hash = 0
            for (let i = 0; i < key.length; i++) {
                hash = (hash + key.charCodeAt(i) * i) % this.data.length
            }
            return hash
        },
    
        _getLinkedListElement(hashIndex, key) {
            let currentNode = this.data[hashIndex].head
            while (currentNode) {
                if (currentNode?.value && currentNode.value[0] === key) {
                    return currentNode.value
                }
                currentNode = currentNode.next
            }
        },
    
        get(key) {
            const hashIndex = this._hashKeyIntoIndex(key)
            const linkedListElement = this._getLinkedListElement(hashIndex, key)
            return linkedListElement ? linkedListElement[1] : undefined
        },
    
        set(key, value) {
            const hashIndex = this._hashKeyIntoIndex(key)
            const keyValue = [key, value]
            if(!this.data[hashIndex]) {
                this.data[hashIndex] = new LinkedList(keyValue)
                return 
            }
            const linkedListElement = this._getLinkedListElement(hashIndex, key)
            if(!linkedListElement) {
                this.data[hashIndex].append(keyValue)
            } else {
                linkedListElement[1] = value
            }
        },
    
        getKeysOrValues(shouldGetKeys) {
            const index = shouldGetKeys ? 0 : 1
            let keysOrValues = []
            
            this.data.forEach(bucket => {
                mappedBucket = bucket.map(list => list[index])
                keysOrValues = [...keysOrValues, ...mappedBucket]
            })
    
            return keysOrValues
        },
    }
}
