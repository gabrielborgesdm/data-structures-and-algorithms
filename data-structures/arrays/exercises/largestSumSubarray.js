function maxSubArraySum(numbersArray) {
    if (!checkArrayIsValid(numbersArray)) return

    let totalSum = 0
    let largestSum = 0

    for (let i = 0; i < numbersArray.length; i++) {
        totalSum += numbersArray[i]

        if (largestSum < totalSum) {
            largestSum = totalSum
        }

        if (totalSum < 0) {
            totalSum = 0
        }
    }

    return largestSum
}

function checkArrayIsValid(numbersArray) {
    return Array.isArray(numbersArray) && numbersArray.length > 0
}

console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
