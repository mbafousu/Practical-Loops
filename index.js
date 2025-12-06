// PART1: FIZZ BUZZ

//loop through all number from 1 to 100
for (let i = 1; i<= 100; i++) {



// chech if number is divisible by both 3 and 5 first
// because numbe like 15 is divisible by both
if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");

    // chech if number is divisible by 3
} else if  (i % 3 === 0) {
    console.log("Fizz");

    // check if the number is divisible by 5
} else if ( i % 5 ===0) {
    console.log("Buzz")
    
    // if not divisible by 2 or 5, just print a number
} else {
    console.log(i);

    }
}
