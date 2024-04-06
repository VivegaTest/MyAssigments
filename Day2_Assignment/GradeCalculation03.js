
const prompt = require('prompt-sync')();



function calStudentScore(score){
    switch(true){
        case (score <= 100 && score >= 80):
            return("A");
            break;
        case (score>60 && score<=80):
            return 'B';
            break;
        case (score>40 && score<=60):
            return 'C';
            break;
        case (score<=40):
            return 'F';
            break;
    }
}

const score = prompt("Enter score: ");
console.log(calStudentScore(score));