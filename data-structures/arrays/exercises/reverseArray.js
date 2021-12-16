/**
 * How would you reverse an array?
 */

/**
 * This is Big o(1) in terms of space complexity and Big O(n) in terms of time complexity
 */
function reverseArray(array) {
    let low = 0
    let high = array.length - 1

    while (high > low) {
        switchArrayValues(array, low, high)
        low++
        high--
    }
    return array
}

function switchArrayValues(array, index1, index2) {
    const aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
}

console.log(reverseArray([1, 2, 3, 4, 5]))
