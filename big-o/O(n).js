const findNemoWithForLoop = (list) => {
    let time0 = performance.now()
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'nemo') {
            console.log('Found NEMO with For Loop!')
        }
    }
    let time1 = performance.now()
    console.log(`Call to find NEMO took: ${time1 - time0} ms`)
}


const bigList = new Array(9999999).fill('a')
bigList.push("nemo")

findNemoWithForLoop(bigList)

// For each element added, one more iteration will be needed
// that's the big O of n -> O(n) -> Linear
// That's the most common notion
// Big O doesn't care about time, but about the amount of operations needed to complete the task
// If you look at performance-of-loops.js you'll see that they all take different amount of time to complete, but they're all O(n)
// You can have different time performance while being the same O notation 