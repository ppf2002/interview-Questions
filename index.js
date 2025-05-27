
// Q.1: How to reverse a string?
function reverseString(str) {
    /* input:- hello ; output:- olleh
     * input:- hello world ; output:- dlrow olleh
     */
    let charArray = str.split('');
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }
    let reversedString = charArray.join('');
    console.log(reversedString);
}


// Q.2: How to find if the given string is a palindrome or not?

function chkPalindrome(str) {
    /* input:- madam ; output:- Palindrome
     * input:- step on no pets ; output:- Palindrome
     * input:- book ; output:- Not Palindrome
     * 
     * */

    let flag = false;
    for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
        if (str[i] !== str[j]) {
            flag = false;
            break;
        } else {
            flag = true;
        }
    }
    if (flag) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}




 // Q.3: How to reverse the order of words in a given string?

function reverseWordOrder(str) {
    /* input:- Welcome to Csharp corner ; output:- corner Csharp to Welcome
    * 
    * */

    let reverseSentence = '';
    let Start = str.length - 1;
    let End = str.length - 1;

    while (Start > 0) {
        if (str[Start] === ' ') {
            let i = Start + 1;
            while (i <= End) {
                reverseSentence += str[i];
                i++;
            }
            reverseSentence += ' ';
            End = Start - 1;
        }
        Start--;
    }

    for (let i = 0; i <= End; i++) {
        reverseSentence += str[i];
    }
    console.log(reverseSentence);
}



 // Q.4: How to reverse each word in a given string?

function reverseWords(str) {
    /* input:- Welcome to Csharp corner ; output:- emocleW ot prahsC renroc */

    let output = '';
    let charlist = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ' || i === str.length - 1) {
            if (i === str.length - 1) {
                charlist.push(str[i]);
            }
            for (let j = charlist.length - 1; j >= 0; j--) {
                output += charlist[j];
            }

            output += ' ';
            charlist = [];
        } else {
            charlist.push(str[i]);
        }
    }
    console.log(output.trim());
}



// Q.5: How to count the occurrence of each character in a string?

function countCharacter(str) {
    /* input:- hello world ; 
     * output:- h - 1
                e - 1
                l - 3
                o - 2
                w - 1
                r - 1
                d - 1
     * 
     * */

    const characterCount = {};

    for (const character of str) {
        if (character !== ' ') {
            if (!characterCount[character]) {
                characterCount[character] = 1;
            } else {
                characterCount[character]++;
            }
        }
    }

    for (const [character, count] of Object.entries(characterCount)) {
        console.log(`${character} - ${count}`);
    }
}



// New coverter programe

// Q.6: How to remove duplicate characters from a string?

function removeduplicate(str) {
/* input:- csharpcorner ; output:- csharpone
             * 
             */
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }
  console.log(result);
}


// Q.7: How to find all possible substring of a given string?
function findallsubstring(str) {
  for (let i = 0; i < str.length; ++i) {
    let subString = '';
    for (let j = i; j < str.length; ++j) {
      subString += str[j];
      console.log(subString + ' ');
    }
  }
}



 // Q.8: How to perform Left circular rotation of an array?

function rotateLeft(array) {
 /* input :- 1 2 3 4 5 output :- 2 3 4 5 1 
             * */

            //Logic :- Iterate loop from  size-1 to 0 and swap each elements with last element 

  const size = array.length;
  let temp;
  for (let j = size - 1; j > 0; j--) {
    temp = array[size - 1];
    array[array.length - 1] = array[j - 1];
    array[j - 1] = temp;
  }
  return array;
}



// Q.9: How to perform Right circular rotation of an array?
function rotateRight(array) {
	/* input :- 1 2 3 4 5 output :- 5 1 2 3 4 
             * */

            //Logic 1 :- Iterate loop from 0 to size-1 and swap each elements with first element 

    let size = array.length;
    let temp;
    for (let j = 0; j < size - 1; j++) {
        temp = array[0];
        array[0] = array[j + 1];
        array[j + 1] = temp;
    }
    return array;
}



// Q.10: How to find if a positive integer is a prime number or not?
function findPrime(number) {
   /* input :- 20 output :- Not Prime
             * input :- 17 output :- Prime
             * 
             * */
    if (number === 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    const squareRoot = Math.floor(Math.sqrt(number));

    for (let i = 3; i <= squareRoot; i += 2) {
        if (number % i === 0) return false;
    }

    return true;
}


 // Q.11: How to find the sum of digits of a positive integer?
function sumOfDigits(num) {
    // input: 168 ; output: 15

    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}

// Q.12: How to find second largest integer in an array using only one loop?
function findSecondLargestInArray(arr) {
    // input: [1, 2, 3, 4, 5]; output: 4

    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;

    for (let i of arr) {
        if (i > max1) {
            max2 = max1;
            max1 = i;
        } else if (i > max2 && i < max1) {
            max2 = i;
        }
    }

    console.log(max2);
}




 // Q.13: How to find Third largest integer in an array using only one loop?

function findThirdLargestInArray(arr) {
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;
    let max3 = Number.MIN_SAFE_INTEGER;

    for (let i of arr) {
        if (i > max1) {
            max3 = max2;
            max2 = max1;
            max1 = i;
        } else if (i > max2 && i < max1) {
            max3 = max2;
            max2 = i;
        } else if (i > max3 && i < max2) {
            max3 = i;
        }
    }

    console.log(max3);
}

// Q.14: How to convert a two-dimensional array to a one-dimensional array?

function multiToSingle(array) {
    // Input: [[1, 2, 3], [4, 5, 6]]
    // Output: 1 4 2 5 3 6

    const width = array.length;        // number of rows
    const height = array[0].length;    // number of columns
    const single = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            single.push(array[x][y]);
            process.stdout.write(array[x][y] + ' ');
        }
    }
}


 // Q.15: How to convert a one-dimensional array to a two-dimensional array?
function singleToMulti(array, row, column) {
    // Input: [1, 2, 3, 4, 5, 6]
    // Output:
    // 1 2 3
    // 4 5 6

    const multi = [];
    let index = 0;

    for (let y = 0; y < row; y++) {
        const currentRow = [];
        for (let x = 0; x < column; x++) {
            currentRow.push(array[index]);
            process.stdout.write(array[index] + ' ');
            index++;
        }
        multi.push(currentRow);
        console.log(); // new line
    }

    // Return the 2D array if needed
    return multi;
}


// Q.16: How to find the angle between hour and minute hands of a clock at any given time?

function findAngleInTime(hours, mins) {
    // Normalize hours to 12-hour format
    hours = hours % 12;

    const hourDegrees = (hours * 30) + (mins * 0.5); // 30 degrees per hour + half a degree per minute
    const minuteDegrees = mins * 6; // 6 degrees per minute

    let diff = Math.abs(hourDegrees - minuteDegrees);

    if (diff > 180) {
        diff = 360 - diff;
    }

    console.log(`The angle between hour hand and minute hand is ${diff} degrees`);
}



//Q. 17: count the intiger array how many times interger repetes
function countIntArray() {
    const ints = [10, 45, 15, 15, 10, 45, 39, 21, 26]; // Example int array
    const counts = {}; // Use an object as a dictionary

    for (let number of ints) {
        if (counts[number]) {
            counts[number]++; // Increment count if number already exists
        } else {
            counts[number] = 1; // Add number with count 1 if it's new
        }
    }

    // Output the dictionary
    for (let key in counts) {
        console.log(`Number: ${key}, Count: ${counts[key]}`);
    }
}


OR
function countIntArray() {
    const ints = [10, 45, 15, 15, 10, 45, 39, 21, 26];
    const counts = new Map();

    for (let number of ints) {
        counts.set(number, (counts.get(number) || 0) + 1);
    }

    for (let [key, value] of counts.entries()) {
        console.log(`Number: ${key}, Count: ${value}`);
    }
}

