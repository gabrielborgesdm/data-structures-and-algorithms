
const myArray = {
  length: 0,
  data: {},
  push(value) {
    this.data[this.length] = value
    return ++this.length
  },
  pop() {
    if (this.length === 0) return undefined

    this.length -= 1
    const value = this.data[this.length]
    delete this.data[this.length]
    return value
  },
  shift(index = 0) {
    if (this.length === 0) return undefined
    const value = this.data[index]

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length]
    this.length -= 1
    return value
  },
  insert(index, value) {
    if (index > this.length) {
      throw "Index can't be higher than the array length"
    }

    for (let i = this.length; i >= index; i--) {
      if (i === index) {
        this.data[i] = value
        break
      }
      this.data[i] = this.data[i - 1]
    }
    return ++this.length
  },
  values() {
    const values = []
    for (let i = 0; i < this.length; i++) {
      values.push(this.data[i])
    }
    return values
  }
}
