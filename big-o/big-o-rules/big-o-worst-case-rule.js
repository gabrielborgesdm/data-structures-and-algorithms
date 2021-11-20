function findNumberOneInAList(list) {

    for (let i = 0; i < list.length; i++) {
        if (list[i] === 1) {
            console.log("Found 1 at", i)
            break
        }
    }
}

let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

findNumberOneInAList(list)

/*
*   Worst case scenario rule
*   Big O always expect the worst case
*   So always expect the number 1 to be at the last position of the array in order to calculate it
*
*/

