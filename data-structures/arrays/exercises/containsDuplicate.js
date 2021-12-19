/**
 * Given an integer array numbers, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

/** 
 * Time complexity: Big O(n)
 * Space complexity: Big O(n)
*/
function checkContainsDuplicate(numbers) {
    const numbersMap = {}
    for (const number of numbers) {
        if (numbersMap[number]) return true
        numbersMap[number] = true
    }
    return false
}

/** 
 * Time complexity: Big O(n)
 * Space complexity: Big O(n) 
 * I'm guessing that in order to instantiate a new Set it takes big O(n) for both space and time
*/
const checkContainsDuplicate2 = (numbers) => new Set(numbers).size !== numbers.length


/** 
 * Time complexity: O(n log n)
 * Space complexity: Big O(1)
 * This one is O(n log n) because of the sorting, but it takes no memory
*/
function checkContainsDuplicate3(numbers) {
    numbers.sort((a, b) => a - b)
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === numbers[i + 1]) return true
    }
    return false
}

console.log(checkContainsDuplicate([1, 2, 3, 4, 5, -2, -2]))
console.log(checkContainsDuplicate2([1, 2, 3, 4, 5, -2]))
console.log(checkContainsDuplicate3([1, 2, 3, 4, 5, -2, -1, -2]))