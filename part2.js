// Part2: Prime Time

// Declare an arbitrary number, n
let n = 9;
let nextNumber = n;

// check if that number is a prime
while (true) {
    let isPrime = true; 
    if (nextNumber < 2) {
        isPrime = false;
    
    }
    for (let i = 2; i <= Math.sqrt(nextNumber); i++) {
        if (nextNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("the nest prime number is:", nextNumber);
        break
    }
    nextNumber++;
}