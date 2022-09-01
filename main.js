// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

//solution 1
function abbrevName(name) {
    let initials = [];
    const splittedName = [...name.split(" ")];
    let sentence1 = [...splittedName[0].split("")];
    let sentence2 = [...splittedName[1].split("")];
    initials.push(sentence1[0].toUpperCase());
    initials.push(sentence2[0].toUpperCase());
    let result = `${initials[0]}.${initials[1]}`;
    return result;
}

//solution 2 (best from codewars)
//notes: remember next time, you can use 2 iterators!!!

function abbrevName2(name) {
    let testArr = name.split(" ");
    return (testArr[0][0] + '.' + testArr[1][0]).toUpperCase();
}

//completed
//////////////////////////////////////////////////////

//Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//For example:
//time = 3 ----> litres = 1
//time = 6.7---> litres = 3
//time = 11.8--> litres = 5

function litres(time) {
    return Math.floor(time * 0.5);
}

//notes: very easy
//completed
//////////////////////////////////////////////////////