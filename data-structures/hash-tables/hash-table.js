class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value) {
        const index = this._hash(key)
        const arrayOfKeyAndValue = [key, value]
        if (this.data[index]?.length > 0) {
            this._verifyIfExistsAndInsert(index, arrayOfKeyAndValue)
        } else {
            this.data[index] = [arrayOfKeyAndValue]
        }
    }

    _verifyIfExistsAndInsert(index, arrayOfKeyAndValue) {
        const indexToInsert = this._getKeyIndex(index, arrayOfKeyAndValue[0])
        this.data[index][indexToInsert] = arrayOfKeyAndValue
    }

    _getKeyIndex(index, dataKey) {
        if (!this.data[index]) return -1
        let indexToInsert = this.data[index].length
        for (let i = 0; i < this.data[index].length; i++) {
            const currentKey = this.data[index][i][0]
            if (currentKey === dataKey) {
                indexToInsert = i
                break
            }
        }
        return indexToInsert
    }

    get(key) {
        const i = this._hash(key)
        const j = this._getKeyIndex(i, key)
        return j !== -1 ? this.data[i][j][1] : null
    }




}
const hash = new HashTable(20)
hash.set("a", "abacate")
hash.set("2", "abacate1")
hash.set("3", "abacate2")
hash.set("assasd", "abacate3")
hash.set("assasd", "abacate31")
console.log(hash.get("3"))
