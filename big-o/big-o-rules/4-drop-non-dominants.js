function printAllNumbersThenSumAllPairs(numbers) {

    console.log("these are the numbers")
    numbers.forEach(number => console.log(numbers)) //O(n)

    numbers.forEach(number1 => {
        numbers.forEach(number2 => {
            console.log(number1 + number2) //O(n*n)
        });
    });
}


/**
 * Rule 4 - Drop the non dominants
 * In this function even though you have O(n + n^2), n is not the most important item
 * The element that will give more impact in the function is n^2 therefore you should drop the others
 * The big o for this function is Big O of n^2
 */