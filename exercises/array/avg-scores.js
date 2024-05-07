"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100, 88];

function getAverage(scores) {
    let total = 0;
    let avg;
    for (let i = 0; i < scores.length; i ++) {
        total += scores[i];

       
    }

    avg = total / scores.length 
    return avg;
}


let myScoresAvg = getAverage(myScores);
let yourScoresAvg = getAverage(yourScores);

console.log(myScoresAvg);
console.log(yourScoresAvg);