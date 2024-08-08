// Find the Average

// Write a function named calculateAverage that takes an array of numbers as input and returns the average (mean) of those numbers.

// Sample Input: [10, 15, 20, 25]

// Sample Output: 17.5

function average(A){
    let sum = 0;
    for(let i = 0; i < A.length; i++){
        sum+=A[i];
    }
    let avg = sum / A.length;
    console.log(avg);
}

average([10, 15, 20, 25])
