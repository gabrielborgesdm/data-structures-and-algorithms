const { performance } = require('perf_hooks')

// My question is, I know that operations and comparisons take time, but what about assignments?

function executeCallbackInsideOfALoop(title, numberOfTimes, callback) {
    const time1 = performance.now()
    for (let i = 0; i < numberOfTimes; i++) {
        callback()
    }
    const time2 = performance.now()
    console.log(`${title} took ${time2 - time1} ms`)
}

executeCallbackInsideOfALoop("Do nothing", 999999999, () => {

})

executeCallbackInsideOfALoop("Compare", 999999999, () => {
    if (9 < 2 + 3) {

    }
})

executeCallbackInsideOfALoop("Assign", 999999999, () => {
    const a = 5
})

executeCallbackInsideOfALoop("Assign and compare", 999999999, () => {
    const a = 5 > 3
})


// I know it's irrelevant, but I was just curious to see if assignments could cause time in a function
// In order to see more details, have a look at Big-O-sheet.pdf