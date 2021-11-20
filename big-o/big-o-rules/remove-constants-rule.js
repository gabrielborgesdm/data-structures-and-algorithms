const printFirstItemThenFirstHalfThenSayHi100Times = (items) => {
    console.log(items[0])

    let middleIndex = Math.floor(items.length / 2)
    let index = 0

    while (index < middleIndex) {
        console.log(items[index])
        index++
    }

    for (let i = 0; i < 100; i++) {
        console.log("Hi")
    }
}

/**
 * The big O calculation would be O(1 + n/2 + 100)
 * But we don't actually care about the constants
 * Rule Number 2 - Drop the constants
 * We don't actually care about 1 or 100, and also, dividing n/2 doesn't mean anything in terms of scaling
 * At the end of the day, the big O is still O(n)
 */