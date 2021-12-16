/**
 * Assuming you receive two sorted arrays, how do you merge them?
 */
function mergeSortedArray(array1, array2) {
    let i = 0
    let j = 0
    const mergedArray = []
    while (i < array1.length || j < array2.length) {
        const item1 = array1[i]
        const item2 = array2[j]
        if (checkIfNumberIsLowerOrIfOtherDoesNotExist(item1, item2)) {
            mergedArray.push(item1)
            i++
        } else {
            mergedArray.push(item2)
            j++
        }
    }
    return mergedArray
}

function checkIfNumberIsLowerOrIfOtherDoesNotExist(value1, value2) {
    return !value2 || value1 < value2
}



const mergedArray = mergeSortedArray([0, 1, 2, 3, 4, 31], [4, 6, 30])
console.log(mergedArray)
