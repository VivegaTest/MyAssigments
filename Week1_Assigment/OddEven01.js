const prompt = require('prompt-sync')();


function isOddOrEven(number) {
    result = (number % 2 == 0) ? "even" : "odd";
}


const number = prompt("Enter a number: ");
isOddOrEven(number);
console.log(`The number is ${result}.`);


