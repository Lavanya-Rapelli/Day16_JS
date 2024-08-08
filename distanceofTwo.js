// Distance Between Two Points

// Write a function named distance that takes the x and y coordinates of two points and returns the distance between them.

// Sample Input: (2, 3), (5, 7);

// Sample Output: 5.0

function distance(x1, y1, x2, y2) {
    
    let dx = x2 - x1;
    let dy = y2 - y1;

   
    let dist = Math.sqrt(dx * dx + dy * dy);

    
    console.log(dist.toFixed(1));
}


distance(2, 3, 5, 7);
