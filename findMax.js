// Find Maximum

// Write a function named findMinMax that takes an array of numbers as input and returns maximum value." The values should be the maximum numbers in the input array, respectively.

// Sample Input: arr = [15, 2, 34, 8, 19]

// Sample Output: max = maximum(arr) ; // output: max = 34 ;

function findMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}

findMax([15, 2, 34, 8, 19]);