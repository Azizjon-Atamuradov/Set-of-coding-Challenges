// Write a function findLargest that takes three numbers as arguments and returns the largest of the three.

function findLargest (a, b, c) {

    return Math.max (a, b, c);
}


console.log(findLargest(5, 10, 3));
console.log(findLargest(8, 2, 6));

//Write a function reverseWords that takes a string as an argument and returns a new string where the order of the words in the sentence  are reversed , but the words themselves are not.

function reverseWords(sentence) {
    
    const words = sentence.split(' ');

    const reversedWords = words.reverse();

    return reversedWords.join (' ');
}

console.log(reverseWords("Hello world!"));
console.log(reverseWords("The quick brown fox"));
console.log(reverseWords("JavaScript is fun"));

//Write a function findLongestWord that takes an array  of strings as an argument and returns the longest word in the array . If there are multiple words with the same lenght , return the first one.

function findLongestWord(words) {

    let longestWord = '';

    for (const word of words ) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

 console.log(findLongestWord(["apple", "banana", "cherry", "date"]));
 console.log(findLongestWord(["dog", "elephant", "cat"]));
 console.log(findLongestWord(["red", "blue", "green"]));

// Write a function countWords that takes a string sentence as an argument and returns an object where each key is word in yhe sentence and the corresponding value is the number of times that word appears in the sentence

