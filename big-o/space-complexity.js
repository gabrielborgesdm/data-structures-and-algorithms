function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

printArray([6, 4, 3, 2, 4, 5]) // O(1)

/** What's the space complexity of this function?
 * It's O(1)
 * It doesn't matter the size of the array itself, but how big it can get
 */


function getArrayOfHi(n) {
    let array = []
    for (let i = 0; i < n; i++) {
        array[i] = "hi"
    }
    return array
}

getArrayOfHi(10) // O(n)

/**
 * In terms of space complexity, this is O(n) because it alloc a new variable in the array each time it loops
 */


/**
 * What causes Space Complexity:
 * - Variable
 * - Data Structures
 * - Function Calls
 * - Allocations
 */