// Factorial Calculation

// Write a function named calculateFactorial that takes an integer n as input and returns the factorial of n (n!). Use this function to calculate the factorial of a given number.

// result = calculateFactorial(5);

// // Sample Output: result = 120

function factorialSum(n){
    let sum = 1;
    for(let i = 1; i <= n; i++){
        sum = sum*i;
    }
    console.log(sum)
}

factorialSum(5);