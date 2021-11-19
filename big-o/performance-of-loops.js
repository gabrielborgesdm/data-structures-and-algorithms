const { performance } = require('perf_hooks')

const findNemoWithConstOfLoop = (list) => {
    let time0 = performance.now()
    for (const element of list) {
        if (element === 'nemo') {
            console.log('Found NEMO with ConstOf Loop!')
        }
    }
    let time1 = performance.now()
    console.log(`Call to find NEMO took: ${time1 - time0} ms`)
}

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

const findNemoWithForEach = (list) => {
    let time0 = performance.now()
    list.forEach((element) => {
        if (element === 'nemo') {
            console.log('Found NEMO with ForEach Loop!')
        }
    })
    let time1 = performance.now()
    console.log(`Call to find NEMO took: ${time1 - time0} ms`)
}

const bigList = new Array(9999999).fill('a')
bigList.push("nemo")

findNemoWithConstOfLoop(bigList)
findNemoWithForLoop(bigList)
findNemoWithForEach(bigList)

// In this code I was just curious to see how long it would take for them to complete each loop
// It's not really relevant, but it's actually cool!