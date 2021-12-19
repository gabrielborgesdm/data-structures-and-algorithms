/**
 * Given an integer array numbers, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 */

function moveZeros(numbers) {
    let newIndex = 0
    let originalIndex = 0

    while (newIndex < numbers.length) {
        if (numbers[originalIndex] !== 0) {
            numbers[newIndex] = numbers[originalIndex] || 0
            newIndex++
        }
        originalIndex++
    }
    console.log(numbers)
}


moveZeros([0, 1, 0, 3, 12])