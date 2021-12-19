/**
 * Longest Word 
 * Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
 * If there are two or more words that are the same length, return the first word from the string with that length. 
 * Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567
 * https://coderbyte.com/editor/Longest%20Word:JavaScript
*/

/**
 * In this function, I decided to take a little bit more of memory in order to keep data about the longest word
 * Since I needed to know the length of the formatted word and at the same time I needed to return the original one,
 * instead of calling the 'removeSpecialCharacters' every time I needed to compare the sizes, I chose to store both index and the size, making it faster
 */

function LongestWord(sen) {
    const words = sen.split(" ")
    let longestWordIndex = 0
    let longestWordSize = 0
    for (let i = 0; i < words.length; i++) {
        const formattedWord = removeSpecialCharacters(words[i])
        if (formattedWord.length > longestWordSize) {
            longestWordIndex = i
            longestWordSize = formattedWord.length
        }
    }
    return words[longestWordIndex];

}

function removeSpecialCharacters(word) {
    const allExceptSpecialCharactersRegex = /[^\w\s]/gi
    return word.replace(allExceptSpecialCharactersRegex, "")
}

// keep this function call here 
console.log(LongestWord("Hello there, how are you?"));