// Write a function named reverseString that takes a string as input and returns the reverse of the string. Use this function to reverse a given string.

// reversedString = reverseString("hello");

// // Sample Output: reversedString = "olleh"


function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed); 
}

reverseString("hello"); 
