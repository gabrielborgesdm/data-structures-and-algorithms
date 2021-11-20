const getFirstElementFromList = (list) => list[0]

const logTheFirstTwoElements = (list) => {
    console.log(list[0])
    console.log(list[1])
}

const hugeList = new Array(999999).fill("some_item")

console.log(getFirstElementFromList(hugeList))
console.log(logTheFirstTwoElements(hugeList))

// These are examples of O(1) -> constant
// No matter how many items you have, the amount of operations needed will always be the same
