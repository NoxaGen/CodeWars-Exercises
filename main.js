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

//In this little assignment you are given a string of space separated numbers, and have to return
// the highest and lowest number.
//Examples
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"

//function when user input is separated by commoa (1,1233,-10, 213 etc);
function highAndLowCommoa(...numbers) {
    const negatives = numbers.filter(n => n < 0);
    const positives = numbers.filter(n => n >= 0);
    return (`${(Math.max(...positives))} ${Math.min(...negatives)}`);
}
//completed 

//function when user input is in 1 string like this: ("12 5 11 4555 11");
function highAndLow(numbers) {
    const splitted = numbers.split(" ");
    const numInts = splitted.map(Number);
    const negatives = numInts.filter(n => n < 0);
    const positives = numInts.filter(n => n >= 0);
    if (negatives.length === 0) {
        return (`${(Math.max(...positives))} ${Math.min(...positives)}`);
    } else if (negatives.length > 0 && positives.length > 0) {
        return (`${(Math.max(...positives))} ${Math.min(...negatives)}`);
    } else if (positives.length === 0) {
        return (`${(Math.max(...negatives))} ${Math.min(...negatives)}`);
    }
}
//completed

//If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below 
//the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
//Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
    let score = [];
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (i % 5 === 0) {
            score.push(i);
            sum += i;
        } else if (i % 3 === 0) {
            score.push(i)
            sum += i;
        }
    }
    return sum
}

//completed

//tortoise racing

////Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
//When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
//More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
//The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

function race(v1, v2, g) {

    let diffrenceG = 76; //advantage in feets from A1 to B2
    let AAvgSpeed = 710; //speed A turtle - feet per hour
    let BAvgSpeed = 810; //speed B turtle - feet per hour
    let hour = 0;
    let minute = 0;
    let second = 0;

    let keepGCalc = 0;

    let finalResult = [hour, minute, second]

    // 3600 seconds is 1h
    // 60 minutes in 1h

    if (AAvgSpeed >= BAvgSpeed) {
        return 0;
    }

    //predkosc zolwia B dzielona na 60minut daje nam ile feet robi zolw na godzine
    let convertFeetToTimeH = BAvgSpeed / 65;
    //wcychodzi, ze na godzine robi 13.5 przy stalych danych
    console.log(`turtle B doing  ${convertFeetToTimeH} feets per h `);

    //teraz podzielimy odlegosc od A do Z przez skonvertowany czas
    keepGCalc = diffrenceG / convertFeetToTimeH;
    console.log(keepGCalc.toFixed(4));
    console.log(keepGCalc);


    // let restFromH;
    // let minutesFromH;

    // if (convertFeetToTimeH % Math.floor(convertFeetToTimeH)) {
    //     restFromH = convertFeetToTimeH - Math.floor(convertFeetToTimeH);

    //     hour = +1;
    // }

    // if (restFromH) {
    //     minutesFromH = Math.floor(restFromH * 60);
    // }

    // console.log(restFromH);
    // console.log(minutesFromH);
    // console.log(finalResult);

    //unfinished - lets check it later

}


//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
//The function takes a name as its only argument, and returns one of the following strings:
//name + " plays banjo" 
//name + " does not play banjo"
//Names given are always valid strings.

function areYouPlayingBanjo(name) {

    let splittedName = name.split("");
    if (splittedName[0] === 'r' || splittedName[0] === 'R') {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo"
    }
}

//note, in js you dont need to split string to get proper index
//i can make it shorter by using  console.log(name[0]);
//completed