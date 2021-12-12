/**
 * I'm gonna give you a collection of numbers, and I need you to get this collection and find a
 *  matching pair that is equals to a sum I'm gonna give you as well.
 * 
 * 1. Input -> 
 *  - collectionOfNumbers = [2, 3, 4, 5]
 *      - Integers
 *      - They can be negative
 *      - It will be sorted
 *  - desiredSum = 8
 *      - integer
 * 
 * 2. Output ->
 *  - Boolean with the status: found -> true | not found -> false
 * 
 * 
 * 3. Main goal -> Do you value space complexity or time complexity? What's the most important value of this exercise?
 *  - Just do an optimized function
 * 
 * 5. Options ->
 *  - The first approach I can think of is a nested loop comparing each element of the two arrays
 *      - Good in terms of space complexity because you don't need to store anything -> O(1)
 *      - Bad in terms of time complexity -> O(n^2)
 * 
 * - Create a array, search for the complementary in the array, and if I don't find it, I'll store it
 *  - Not that bad in terms of space complexity -> O(n) 
 *  - Not that bat in terms of time complexity -> O(n)
 * 
 *
 */

/**
 * Can I assume the collection will always have numbers, and that the two params will be given?
 *  Usually I would validate the inputs
 * 
 * Steps ->
 * 1. Create the array
 * 2. Loop through the collection
 *     1. Check if the complementary number exists in the collection -> return true
 *     2. add the complementary number to the collection
 * 3. return false
 */

function checkIfCollectionHasAGivenSum(collection, sum) {
    const loopedNumbers = []

    for (const number of collection) {
        const complementary = sum - number
        if (loopedNumbers.includes(complementary)) {
            console.log(number, complementary, sum)
            return true
        }
        loopedNumbers.push(number)

    }
    return false
}


/**
 * Time to test the code
 */

let collection = [3, 2, 5, -11]
let sum = -6

console.log(checkIfCollectionHasAGivenSum(collection, sum))


collection = [3, 2, 500000, 500000]
sum = 1000000

console.log(checkIfCollectionHasAGivenSum(collection, sum))
