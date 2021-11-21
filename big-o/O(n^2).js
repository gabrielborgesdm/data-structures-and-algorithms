
const printPairsOfArrays = (array) => {
    let numberOfOperations = 0
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
            numberOfOperations++
        }
    }
    console.log("Is big O quadratic:", numberOfOperations === array.length * 4)
}


const array = [1, 2, 3, 4, 5]

printPairsOfArrays(array)


/**
 * When you see nested loops, we use *
 * then this is O(n * n) = O(n^2) => Big O of n to the power of 2 => Quadratic times
 * Every time an element increases you have it multiplied by 4
 */





function compressBoxesTwice(boxes1, boxes2) {
    for (const box1 of boxes1) {
        for (const box2 of boxes2) {
            console.log(box1, box2)
        }
    }
}

/**
 * The function above shows a nested loop with different inputs
 * If you follow the third rule (different expressions for different loops)
 * this should be o(m * n) = o(boxes1 * boxes2)
 * Usually if loops are nested they you should multiply, if they're one bellow another adding is what you're looking for
 */