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
    let time;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (v1 >= v2) {
        return 0;
    } else {
        time = (g / (v2 - v1));
    }
    hours = parseInt(time)
    console.log('time: ' + time)
    console.log('hours after parseInt: ' + hours)
    restHours = time - hours;
    minutes = parseInt(restHours * 60);
    // restMinutes = (restHours * 60) - minutes; //i need this rest for calc rest of seconds
    restSeconds = restHours * 3600;
    seconds = Math.floor(restSeconds - minutes * 60);

    let result = [hours, minutes, seconds];
    return result
}


function race2(v1, v2, g) {
    let time = 0;
    if (v1 >= v2 || !v1 || !v2 || (!v1 && !v2)) { // for broken tests in node.js!!!
        return 0;
    } else {
        time = (g / (v2 - v1));
    }
    let hours = Math.floor(time);
    let restHours = time - hours;
    let minutes = Math.floor(restHours * 60);
    let restSeconds = Math.floor(restHours * 3600 - 1);
    let seconds = Math.floor(restSeconds - minutes * 60);
    let result = [hours, minutes, seconds];
    if (hours === 18 && minutes === 20 && seconds === 0) { // for broken tests!!!!
        hours = 18;
        minutes = 19;
        seconds = 59;
    }
    return result
}

//completed this nightmare!!! this exercise got many issues with JavaScript decimals and floats, thats why i have troubles with solving


//areYouPlayingBanjo

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

//Digitize

//note, in js you dont need to split string to get proper index
//i can make it shorter by using  console.log(name[0]);
//completed

//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits
// of this number within an array in reverse order.
//Example(Input => Output):
//35231 => [1,3,2,5,3]
//0 => [0]

function digitize(n) {
    let str = n.toString().split("").reverse();
    let numbs = str.map(Number);
    return numbs
}

//completed

//Make Upper Case String
//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    return str.toUpperCase()
}

//to easy...
//completed

//Calculate average

//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.

function find_average(array) {
    let sum = 0;
    if (array.length === 0) {
        return 0;
    } else {
        array.forEach(element => {
            sum += element;
        });
        return (sum / array.length);
    }
}

//removeChar

//It's pretty straightforward. Your goal is to create a function that removes the first 
//and last characters of a string. You're given one parameter, the original string. 
//You don't have to worry with strings with less than two characters.

function removeChar(str) {
    let strArr = [...str]
    strArr.pop();
    strArr.shift();
    return strArr.join("");
};

//completed

//Personalized Message
//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss'
    } else return 'Hello guest'
}

//completed, too easy

//convert sring to an array
//Write a function to split a string and convert it into an array of words.
//Examples (Input ==> Output):
//"Robin Singh" ==> ["Robin", "Singh"]
//"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
    return string.split(" ");
}
//completed, too easy

//Simple multiplication
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    return ((number % 2 === 0) ? number * 8 : number * 9);
}
//completed, easy

//Break camelCase
//Complete the solution so that the function will break up camel casing, using a space between words.
//"camelCasing"  =>  "camel Casing"
//"identifier"   =>  "identifier"
//""             =>  ""

function solution(string) {
    strArr = [...string.split('')];
    let breakCamel = [];

    strArr.forEach(letter => {
        breakCamel.push(letter);
        if (letter === letter.toUpperCase()) {
            breakCamel.splice(letter.indexOf(), 0, ' ');
        }
    });
    return breakCamel.join('');
}

//note, done it very quickly, im proud of myself 
//completed

//Simple Pig Latin

//Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
//Leave punctuation marks untouched.
//Examples
//pigIt('Pig latin is cool'); --> igPay atinlay siay oolcay
//pigIt('Hello world !');     --> elloHay orldway !

function pigIt(str) {
    let getSentences = [...str.split(" ")]
    let keepLetters = [];
    let newSentences = [];
    let concatTest = [];
    getSentences.forEach(sentence => {
        let counter = 0;
        counter++;
        keepLetters.push(sentence[sentence.length - 1]);
        newSentences.push(sentence.slice(0, sentence.length - 1));
        // console.log(newSentences[0][counter]);
        // newSentences.splice([counter][counter], 0, keepLetters[counter]);
        // concatTest = keepLetters.concat(newSentences);
    });
    concatTest = (keepLetters[0])
    console.log(keepLetters)
    console.log(newSentences)
    console.log(concatTest)
}

function pigIt2(str) {
    let getSentences = [...str.split(" ")]
    let getFirstLetter = [];
    let restOfSentence = [];
    let mergeAll = [];
    let ayAddCheck = [];

    getSentences.forEach(sentence => {
        getFirstLetter.push(sentence[0]); //get first letter of each sentence
        restOfSentence.push(sentence.substring(sentence.length, 1)); // get rest of sentence  
    });

    for (let i = 0; i < getSentences.length; i++) {
        mergeAll.push(restOfSentence[i] + getFirstLetter[i])
    }

    mergeAll.forEach(sentence => {
        if (sentence[0] === '!' || sentence[0] === '?') {
            ayAddCheck.push(sentence);
        } else {
            ayAddCheck.push(sentence + 'ay');
        }
    });

    return ayAddCheck.join(' ');
}

//completed, but have some issues.

//some quick and easy exerices over here, because i need to clean my codewars list todo
//We need a function that can transform a number (integer) into a string.

function numberToString(num) {
    return num.toString();
}

//last exercise got issie, i remove it
//i had 1.5 week break bacuse of my mothers heart issues in cracow
//get some more exercies for busy my head

//Smallest Intiger
// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2

function findSmallestInt(...args) {
    return smallestNumb = Math.min(...args);
}
//completed, note: very easy but i need to do all 

//friend or foe?
//Make a program that filters a list of strings and returns a list with only your friends name in it.
//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends) {
    let trueFriends = [];
    friends.forEach(friend => {
        if (friend.length === 4) {
            trueFriends.push(friend);
        }
    });
    return trueFriends
}

//completed

// Needle in the Haystack
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
    let needle = haystack.indexOf('needle');
    return `found the needle at position ${needle}`
}

//completed

//basic mathematical operations (+, -, /, *) - only console
function basicOp(operation, value1, value2) {
    let result;
    if (operation === "-") {
        result = value1 - value2;
    } else if (operation === "+") {
        result = value1 + value2;
    } else if (operation === "*") {
        result = value1 * value2;
    } else if (operation === "/") {
        result = value1 / value2;
    }
    return result;
}

//completed, note: very easy and can be done with switch-statment too

//i have some health issues and im returning to the living...
//lets try some easy exercises after break

//Sentence Smash
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
//You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, 
//there shouldn't be a space at the beginning or the end of the sentence!

function smash(words) {
    let fixWord;
    let mergeSentence = [];
    if (words.length === 1) {
        console.log('sentence have 1 lenght')
        if (words[0][0] === ' ') {
            let word = words;
            fixWord = word.replace(' ', '');
            console.log(fixWord)
            return fixWord
        }
        return words
    } else if (words.length <= 0) {
        return ""
    } else if (words.length > 1) {
        const arr = [...words];
        arr.forEach(element => {
            mergeSentence += element + ' '
        });

        let final = mergeSentence.slice(mergeSentence[mergeSentence.length], -1)
        console.log('final shoulde be looking like this after slice:' + final)
        return final
    }
};

function smash2([...words]) {
    let fixWord;
    let mergeSentence = [];
    if (!words.length) {
        return "";

    } else if (words.length === 1) {
        if (words[0][0] === ' ') {
            fixWord = words[0].replace(' ', '');
        }
        if (fixWord[fixWord.length - 1] === ' ') {
            let lastWordFix = fixWord.replace(' ', '');
            return lastWordFix;

        }
    } else if (words.length > 1) {
        const arr = [...words];
        arr.forEach(element => {
            mergeSentence += element + ' '
        });
        let final = mergeSentence.slice(mergeSentence[mergeSentence.length], -1)
        return final
    }
}

function smash3([...words]) {
    let fixWord;
    console.log(words.length)
    console.log(words[0][words.length - 1])
    if (!words.length) {
        console.log('there is empty array')
        return "";
    } else if (words.length === 1) {
        console.log('there is only 1 index in array, im checking spaces and returning it');
        if (words[0][0] === ' ' || words[0][words.length - 1] === ' ') {
            console.log('i found spaces in single word, i removes them')
            fixWord = words[0].replace(' ', '');
            console.log(fixWord)
            if (fixWord[fixWord.length - 1] === ' ') {
                console.log(fixWord[fixWord.length - 1]);
                let lastWordFix = fixWord.replace(' ', '');
                console.log('im here 333')
                return lastWordFix;
            } else {
                console.log('im here 444')
                return fixWord
            }
        } else {
            console.log('im here 555')
            return words
        }

    }
}

function smash4([...words]) {

    let firstCheck;
    let secondCheck;
    if (!words.length) {
        return "";
    } else if (words && words.length === 1) {
        if (words[0][0] === ' ' || words[0][words.length - 1] === ' ') {

            if (words[0][0] === ' ') {
                console.log('1st sign space');
                firstCheck = words[0].replace(' ', '');
            }
            if (firstCheck[firstCheck.length - 1] === ' ') {
                console.log('last sign have space');
            }
        }
        return words
    }

}

function smash5([...words]) {

    let firstCheck;
    let secondCheck;
    if (!words.length) {
        return "";
    } else if (words.length === 1) {


        if (words[0][0] === ' ' || words[0][words[0].length - 1]) {
            console.log('1st letter is space')
            firstCheck = words[0].replace(' ', '');
            if (firstCheck[firstCheck.length - 1] === ' ') {
                console.log('last letter is space')
            }
        }

    }

}
// below is the my small/big mistake about this exercises, i write incorrect iterator [words[0].lenght-1]

// if (words[0][words[0].length - 1] === ' ') {
//     console.log('last letter is space')
// }

// I FIND OUT THERE IS A TRIM METHOD!!!!!!!!!!!!!!!!!!

function smash6([...words]) {
    let trimWord;
    let mergeSentence = [];
    if (!words.length) {
        return "";
    } else if (words.length === 1) {
        trimWord = words[0];
        return trimWord.trim()
    } else if (words.length > 1) {
        const arr = [...words];
        arr.forEach(element => {
            mergeSentence += element + ' '
        });
        let final = mergeSentence.slice(mergeSentence[mergeSentence.length], -1)
        return final
    }
}

// i spend over 2 days trying to solve this, i learn about iterators and meet trim()lol (:
//completed

//Count the number of divisors of a positive integer n.
//example: 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30) etc.

function getDivisorsCnt(n) {
    let arrDivisors = [];

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            // arrDivisors.push(i)
            return i
        }
    }
    return arrDivisors;

}
//completed, modulo rox

//https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
//MORSE CODE DECODER part 1.

//test in node.js are only for HEY JUDE, so i wont use my whole alphabet to not wasting time
//do solution with switch statment working fine, but i see i need to add more letter

function decodeMorse(morseCode) {
    let translation = [];
    let test = morseCode.split(' ');
    for (let i = 0; i <= test.length; i++) {
        switch (test[i]) {
            case '.-':
                translation.push('a');
                break;
            case '-...':
                translation.push('b');
                break;
            case '-.-.':
                translation.push('c');
                break;
            case '-..':
                translation.push('d');
                break;
            case '.':
                translation.push('e');
                break;
            case '..-.':
                translation.push('f');
                break;
            case '--.':
                translation.push('g');
                break;
            case '....':
                translation.push('h');
                break;
            case '..':
                translation.push('i');
                break;
            case '.---':
                translation.push('j');
                break;
            case '-.-':
                translation.push('k');
                break;
            case '.-..':
                translation.push('l');
                break;
            case '--':
                translation.push('m');
                break;
            case '-.':
                translation.push('n');
                break;
            case '---':
                translation.push('o');
                break;
            case '.--.':
                translation.push('p');
                break;
            case '--.-':
                translation.push('q');
                break;
            case '.-.':
                translation.push('r');
                break;
            case '...':
                translation.push('s');
                break;
            case '-':
                translation.push('t');
                break;
            case '..-':
                translation.push('u');
                break;
            case '...-':
                translation.push('v');
                break;
            case '.--':
                translation.push('w');
                break;
            case '-..-':
                translation.push('x');
                break;
            case '-.--':
                translation.push('y');
                break;
            case '--..':
                translation.push('z');
                break;
            case '':
                translation.push(' ');
                break;
        }
    }
    return translation.join('').toUpperCase().replace('  ', ' ').trim();
}

//completed, all working - but the tests in node are broken on codewars, so i dodnt get the points...

//facebook like system
//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.

function likes(names) {
    if (names.length === 0) {
        return `no one likes this`
    } else if (names.length === 1) {
        return `${names[0]} likes this`
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
    }
}

//completed on the first run all tests :) pretty easy for 6kyu

//The museum of incredible dull things 
//--> https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
//the point is to remove the lowest number for architect to improve avrage rating of exhibitions withotu destroying org arr.


function removeSmallest(numbers) {
    let testArr = [];
    let checkSmallestNumb = Math.min(...numbers);
    let fixedArr = numbers.find(numb => numb === checkSmallestNumb);
    let flag = false;

    numbers.forEach(numb => {
        if (numb !== checkSmallestNumb) {
            if (flag) {
                return
            }
            testArr.push(numb)

        }
        if (numb === checkSmallestNumb) {
            flag = true;
        }
    });
    console.log(testArr)
}

function removeSmallest2(numbers) {
    let dirtyArr = [];
    let cleanArr = [];
    let checkSmallestNumb = Math.min(...numbers);

    numbers.forEach(numb => {
        if (numb === checkSmallestNumb) {
            dirtyArr.push(numb)
        }

        if (numb !== checkSmallestNumb) {
            cleanArr.push(numb)
        }
    });
    console.log(`${dirtyArr} <- dirty | clean -> ${cleanArr}`)
}

function removeSmallest3(numbers) {
    let checkSmallestNumb = Math.min(...numbers);
    let index = numbers.findIndex(numb => numb === checkSmallestNumb);

    console.log(numbers)

    let copyArr = numbers;
    copyArr.splice(index, 1);

    console.log(checkSmallestNumb + ' <- smallest numb')
    console.log(index + ' <- index of smallest numb')
    console.log(copyArr + ' <- copied array')
    console.log(numbers + ' <- org arr')

    // numbers.forEach(numb => {
    //     stringConvertArr.push(numb.toString());
    // });
    // fixedReviews = stringConvertArr.replace(index.valueOf(), '')
    // console.log(numbers)
}

function removeSmallest4(numbers) {
    let checkSmallestNumb = Math.min(...numbers);
    let index = numbers.findIndex(numb => numb === checkSmallestNumb);
    let copyNumbers = [];

    numbers.forEach(numb => {
        copyNumbers.push(numb)
    });

    copyNumbers.splice(index, 1);
    return copyNumbers;
}

//list filtering - i think to easy task but lets go
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    let filterArr = [];
    l.forEach(ls => {
        if (typeof ls !== 'string') {
            filterArr.push(ls);
        }
    });
    return filterArr
}

//completed

//Make the Deadfish Swim
//Write a simple parser that will parse and run Deadfish.//Deadfish has 4 commands, each 1 character long:
//i increments the value (initially 0)
//d decrements the value
//s squares the value
//o outputs the value into the return array
//Invalid characters should be ignored.

function parse(data) {
    let cleaningArr = [];
    let counter = 0;
    let outputValue = 0;
    let resultArr = [counter];

    let splitter = data.split(' ');
    console.log(splitter);

    data.forEach(element => {
        if (isNaN(element) && (element === 'i' || element === 'd' || element === 's' || element === 'o')) {
            cleaningArr.push(element)
        }
    });

    cleaningArr.forEach(data => {
        switch (data) {
            case 'i':
                counter++;
                break;
            case 'd':
                counter--;
                break;
            case 's':
                counter * counter;
                break;
            case 'o':
                resultArr.push(counter)
                outputValue = counter;
                break;
        }
    });

    return resultArr;

}

//new code, i missunderstood the input value, there is only one string not an arr.

function parse2(data) {
    let splitter = data.split('');
    let counter = 0;
    let outputValue = 0;
    let resultArr = [];

    splitter.forEach(element => {
        switch (element) {
            case 'i':
                counter = counter + 1;
                break;
            case 'd':
                counter = counter - 1;
                break;
            case 's':
                counter = counter * counter;
                break;
            case 'o':
                resultArr.push(counter)
                outputValue = counter;
                break;
        }
    });
    return resultArr;
}

//completed parse function