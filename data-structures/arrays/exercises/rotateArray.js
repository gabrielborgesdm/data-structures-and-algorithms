/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * https://leetcode.com/problems/rotate-array/description/
 */


/**
 * @param {number[]} numbers
 * @param {number} rotationFactor
 * @return {void} Do not return anything, modify numbers in-place instead.
 */
function rotateArrayToTheLeft(numbers, rotationFactor) {
    if (checkInputIsValid(numbers, rotationFactor)) {
        const numbersIndexesMap = mapArrayIndexes(numbers, rotationFactor)
        reassignValuesToNumbers(numbers, numbersIndexesMap)
        console.log(numbers)
    }
}

function checkInputIsValid(numbers, rotationFactor) {
    return Array.isArray(numbers) && numbers.length > 0 &&
        typeof rotationFactor === "number" && rotationFactor >= 0
}

function mapArrayIndexes(numbers, rotationFactor) {
    const numbersIndexesMap = {}
    for (let i = 0; i < numbers.length; i++) {
        const newIndex = getNewIndex(numbers.length, i, rotationFactor)
        numbersIndexesMap[newIndex] = numbers[i]
    }
    return numbersIndexesMap
}

function reassignValuesToNumbers(numbers, numbersIndexesMap) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbersIndexesMap[i]
    }
}

function getNewIndex(arrayLength, currentIndex, rotationFactor) {
    rotationFactor = rotationFactor % arrayLength
    if (currentIndex + rotationFactor > arrayLength - 1) {
        return (rotationFactor + currentIndex) - (arrayLength)
    }
    return currentIndex + rotationFactor
}

rotateArrayToTheLeft([1, 2, 3, 4, 5, 6, 7], 3)