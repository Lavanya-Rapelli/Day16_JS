//Reverse a Sentence

// Write a function named reverseSentence that takes a sentence (a string containing words separated by spaces) as input and returns the sentence with its words reversed.

// Sample Input: "Hello World" Sample Output: "olleH dlroW"


function reverseSentence(sentence) {
    
    let words = sentence.split(' ');
    
    let reversedWords = words.map(word => {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        return reversedWord;
    });


    let reversedSentence = reversedWords.join(' ');

    console.log(reversedSentence);
}


reverseSentence("Hello World");
