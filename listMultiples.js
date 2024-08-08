// List Multiples of a Number

// Write a function named listMultiples that takes two numbers n and limit. The function should print the first n multiples of limit.

// E.g., listMultiples(3, 5) should print 3, 6, 9, 12, 15 

function listMultiples(n, k){
    let result = "";
    for(let i = 1; i <= k; i++){
        result += n*i+" ";
        
    }
    console.log(result.trim());
}

listMultiples(3, 5);