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

//Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//Examples:
//* 'abc' =>  ['ab', 'c_']
//* 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    let evenStrs = [];
    let splitterStr = str.split("");
    let counter = 0;
    splitterStr.forEach(str => {
        counter++;
        if (counter % 2 === 0) {
            evenStrs.push(splitterStr[counter - 2] + str)
        }
    });

    if (splitterStr.length % 2 !== 0) {
        evenStrs.push(splitterStr[splitterStr.length - 1] + '_');
    }
    return evenStrs;
}

//Your task is to make a function that can take any non-negative integer 
//as an argument and return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.
//Examples:
//Input: 42145 Output: 54421
//Input: 145263 Output: 654321
//Input: 123456789 Output: 987654321

function descendingOrder(n) {
    const str = n.toString().split("");
    const numbers = str.map(Number);
    let modifier = numbers.sort().reverse();
    let str2 = modifier.map(String);
    let result = '';
    str2.forEach(element => {
        result += element;
    });
    return parseInt(result);
}

//completed
//note: thats how one of seniors solve it

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}

// lol