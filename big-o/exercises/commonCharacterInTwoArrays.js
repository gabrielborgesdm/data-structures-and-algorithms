/** 
 * Find a common character in two arrays and return a boolean
 * 
 * There are three approaches that I can think of: 
 * - With nested loops -> Big O(n*m) -> O(n ^ 2)
 * - Looping through both loops at the same time while using an object -> O(max(n, m)) -> O(n)
 * - Turn one array into an object, then loop once in the second one -> Big O(n + m) -> O(n)
 * - Use builtin methods such as some() and includes() -> Since both are linear, I think it's Big O (n^2)
*/


function findCommonElementsWithNestedLoops(array1, array2) {
    for (const element1 of array1) {
        for (const element2 of array2) {
            if (element1 === element2) return true
        }
    }
    return false
}


function findAcommonElementInTwoArraysByLoopingAtTheSameTime(array1, array2) {
    const commonElementsObject = {}
    let i = 0
    while (i < array1.length || i < array2.length) {
        const firstElement = array1[i]
        const secondElement = array2[i]

        if (commonElementsObject[firstElement] === 2 || commonElementsObject[secondElement] === 1) {
            return true
        }
        commonElementsObject[firstElement] = 1
        commonElementsObject[secondElement] = 2
        i++
    }
    return false
}

function findAcommonElementInTwoArraysByTurningArrayIntoObject(array1, array2) {
    const commonElementsObject = {}
    for (const element of array1) {
        commonElementsObject[element] = true
    }

    for (const element of array2) {
        if (commonElementsObject[element]) {
            return true
        }
    }
    return false
}

function findAcommonElementInTwoArraysByUsingSomeAndIncludes(array1, array2) {
    return array1.some(element => array2.includes(element))
}

const array1 = [1, 2, 3, 7, 6, 1, []]
const array2 = [4, 5, 4, []]
console.log([] === [])

console.log(findCommonElementsWithNestedLoops(array1, array2))
console.log(findAcommonElementInTwoArraysByLoopingAtTheSameTime(array1, array2))
console.log(findAcommonElementInTwoArraysByTurningArrayIntoObject(array1, array2))
console.log(findAcommonElementInTwoArraysByUsingSomeAndIncludes(array1, array2))