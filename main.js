//Abbreviate a Two Word Name

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

//Keep Hydrated!

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

//Grasshopper - Grade book

//Complete the function so that it finds the average of the three scores passed 
//to it and returns the letter value associated with that grade.


//Numerical Score	Letter Grade
//90 <= score <= 100	'A'
//80 <= score < 90	'B'
//70 <= score < 80	'C'
//60 <= score < 70	'D'
//0 <= score < 60	'F'
//Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
    let avarage = (s1 + s2 + s3) / 3;
    let result;

    if (avarage >= 0 && avarage < 60) {
        result = 'F';
    } else if (avarage >= 60 && avarage < 70) {
        result = 'D';
    } else if (avarage >= 70 && avarage < 80) {
        result = 'C';
    } else if (avarage >= 80 && avarage < 90) {
        result = 'B';
    } else if (avarage >= 90) {
        result = 'A';
    }
    return result;
}

//completed
//////////////////////////////////////////////////////