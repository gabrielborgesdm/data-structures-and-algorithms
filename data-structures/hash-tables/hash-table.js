class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    /**
     * That's pretty much Big O(1) since it is pretty fast
     */
    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    /**
     * Most part of the times, this is Big O(1) when there is no collision, but it can be Big O (n)
     */
    set(key, value) {
        const index = this._hash(key)
        const listOfKeyAndValue = [key, value]
        if (this.data[index]?.length > 0) {
            this._verifyIfExistsAndInsert(index, listOfKeyAndValue)
        } else {
            this.data[index] = [listOfKeyAndValue]
        }
    }


    _verifyIfExistsAndInsert(index, listOfKeyAndValue) {
        const indexToInsert = this._getKeyIndex(index, listOfKeyAndValue[0])
        this.data[index][indexToInsert] = listOfKeyAndValue
    }


    _getKeyIndex(index, dataKey) {
        const currentBucket = this.data[index]
        if (!currentBucket) return -1
        let keyIndex = currentBucket.length
        for (let i = 0; i < currentBucket.length; i++) {
            const currentKey = currentBucket[i][0]
            if (currentKey === dataKey) {
                keyIndex = i
                break
            }
        }
        return keyIndex
    }

    /**
    * Most part of the times, this is Big O(1) when there is no collision, but it can be Big O (n)
    */
    get(key) {
        const i = this._hash(key)
        const j = this._getKeyIndex(i, key)
        return j !== -1 ? this.data[i][j][1] : undefined
    }

    /**
    * Most part of the times, this is Big O(n), but it can be Big O (n^2)
    */
    keys() {
        return this._getKeysOrValues(true)
    }

    _getKeysOrValues(shouldGetKeys) {
        const elementIndex = shouldGetKeys ? 0 : 1
        const elementsToRetrieve = []
        for (let i = 0; i < this.data.length; i++) {
            const currentBucket = this.data[i]
            if (currentBucket) {
                this._iterateOverBucketAndPushElement(currentBucket, elementIndex, elementsToRetrieve)
            }
        }
        return elementsToRetrieve
    }

    _iterateOverBucketAndPushElement(bucket, elementIndex, elements) {
        bucket.forEach((pairOfKeyAndValue) => elements.push(pairOfKeyAndValue[elementIndex]))
    }

    /**
    * Most part of the times, this is Big O(n), but it can be Big O (n^2)
    */
    values() {
        return this._getKeysOrValues(false)
    }


}
const hash = new HashTable(20)
hash.set("1", "test")
hash.set("2", "test1")
hash.set("3", "test2")
hash.set("asd", "test3")
hash.set("asd", "test4")
console.log(hash.get("3"))
console.log(hash.keys())
console.log(hash.values())
