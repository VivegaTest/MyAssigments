
const prompt = require('prompt-sync')();

function verifyNumberType(number) {
    let result = Math.sign(number);
    if (result == 1) {
        return 'Positive';
    }
    else if (result == -1) {
        return 'Negative';
    }
    else if (result == 0) {
        return 'Neutral';
    }
    else {
        return 'It is not a number';
    }
}

const number = prompt("Enter a number: ");
console.log(verifyNumberType(number));
