// let words = [
//     "kayak",
//     "Paris",
//     "été",
//     "Ressasser"
// ]

let word = "Kayak"

let splitWord = word.toLowerCase().split("")

console.log("splitWord", splitWord)

let reverseWord = splitWord.reverse()

console.log("reverseWord", reverseWord)

let joinWord = reverseWord.join("")

console.log("joinWord", joinWord)

console.log("comparaison", word == joinWord)

if(word == joinWord) {
    console.log("C'est un palindrome")
}

// word
//     .toLocaleLowerCase()
//     .split('')
//     .reverse()
//     .join('') == word.toLocaleLowerCase()

/******** Result : ********/
/*
kayak est un palindrome
Paris n'est pas un palindrome
été est un palindrome
Ressasser est un palindrome
*/