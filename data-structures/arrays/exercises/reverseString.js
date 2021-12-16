/**
 * How would you reverse a string
 */

/**
 * Big O(n)
 */
function reverseString(value) {
    let newString = ""
    for (let i = value.length - 1; i >= 0; i--) {
        newString += value[i]
    }
    return newString
}

/**
 * This would be a modern way. Even though slower, it's still big O(n)
 */
const reverseString2 = (value) => [...value].reverse().join('')


console.log(reverseString("my name is John"))
console.log(reverseString2("my name is John"))
