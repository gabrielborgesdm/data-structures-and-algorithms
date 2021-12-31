const HashTable = require("../hash-table")
/**
 * Identify the first recurring character
 * INPUT: List of numbers = [1, 2, 3, 4, 1, 5]
 * 
 */


function getFirstRecurringCharacter(numbers) {
    const numberMap = new HashTable(10)

    for (const number of numbers) {
        if (numberMap.get(number)) {
            return number
        }
        numberMap.set(number, true)
    }
}

console.log(getFirstRecurringCharacter([1, 2, 3, 6, 4, 2]))