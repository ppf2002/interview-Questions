
function main() {
    let arry = [1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6];
    let jaggedArray = [[], [], []];
    let matrix = [
        [0, 0, 0],
        [0, 0, 0]
    ];
    let myDbl = 0.001;

    let counts = {};

    let myStr = "";
    let strArray = new Array(4).fill("");
    let strArray1 = ["txt1", "txt2"];

    let charArray = new Array(4);
    let charArray1 = Array.from("myText");

    let intList = [];
    let intList1 = [1, 2, 2, 3];

    countIntArray();
    let arr = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    multiToSingle(arr);
    // No need for Console.ReadLine in Node.js
}

//// Q.1: How to reverse a string?
function reverseString(str) {
    let charArray = str.split("");
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        let temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
    }
    console.log(charArray.join(""));
}

//  Q.2: How to find if the given string is a palindrome or not?
function chkPalindrome(str) {
    let flag = true;
    for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
        if (str[i] !== str[j]) {
            flag = false;
            break;
        }
    }
    console.log(flag ? "Palindrome" : "Not Palindrome");
}

// Q.3: How to reverse the order of words in a given string?
function reverseWordOrder(str) {
    console.log(str.split(" ").reverse().join(" "));
}

// Q.4: How to reverse each word in a given string?
function reverseWords(str) {
    let result = str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
    console.log(result);
}

// Q.5: How to count the occurrence of each character in a string?
function countCharacter(str) {
    let counts = {};
    for (let char of str.replace(/\s/g, "")) {
        counts[char] = (counts[char] || 0) + 1;
    }
    for (let char in counts) {
        console.log(`${char} - ${counts[char]}`);
    }
}

//  Q.6: How to remove duplicate characters from a string?
function removeDuplicate(str) {
    let seen = new Set();
    let result = "";
    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    console.log(result);
}

// Q.7: How to find all possible substring of a given string?
function findAllSubstring(str) {
    for (let i = 0; i < str.length; ++i) {
        let subString = "";
        for (let j = i; j < str.length; ++j) {
            subString += str[j];
            process.stdout.write(subString + " ");
        }
    }
    console.log();
}

// Q.8: How to perform Left circular rotation of an array?
function rotateLeft(array) {
    let temp = array.shift();
    array.push(temp);
    console.log(array.join(" "));
}

// Q.9: How to perform Right circular rotation of an array?
function rotateRight(array) {
    let temp = array.pop();
    array.unshift(temp);
    console.log(array.join(" "));
}

// Q.10: How to find if a positive integer is a prime number or not?
function findPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    let sqrt = Math.floor(Math.sqrt(num));
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Q.11: How to find the sum of digits of a positive integer?
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}

// Q.12: How to find second largest integer in an array using only one loop?
function findSecondLargeInArray(arr) {
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;
    for (let i of arr) {
        if (i > max1) {
            max2 = max1;
            max1 = i;
        } else if (i > max2 && i !== max1) {
            max2 = i;
        }
    }
    console.log(max2);
}

// Q.13: How to find Third largest integer in an array using only one loop?
function findThirdLargeInArray(arr) {
    let [max1, max2, max3] = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    for (let i of arr) {
        if (i > max1) {
            [max3, max2, max1] = [max2, max1, i];
        } else if (i > max2 && i !== max1) {
            [max3, max2] = [max2, i];
        } else if (i > max3 && i !== max2 && i !== max1) {
            max3 = i;
        }
    }
    console.log(max3);
}

// Q.14: How to convert a two-dimensional array to a one-dimensional array?
function multiToSingle(matrix) {
    let single = [];
    let width = matrix.length;
    let height = matrix[0].length;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            single.push(matrix[x][y]);
            process.stdout.write(matrix[x][y] + " ");
        }
    }
    console.log();
}

// Q.15: How to convert a one-dimensional array to a two-dimensional array?
function singleToMulti(array, row, column) {
    let result = [];
    for (let y = 0; y < row; y++) {
        let rowArr = [];
        for (let x = 0; x < column; x++) {
            rowArr.push(array[y * column + x]);
            process.stdout.write(array[y * column + x] + " ");
        }
        result.push(rowArr);
        console.log();
    }
    return result;
}

//  Q.16: How to find the angle between hour and minute hands of a clock at any given time?
function findAngleInTime(hours, mins) {
    let hourDegrees = (hours % 12) * 30 + (mins * 0.5);
    let minuteDegrees = mins * 6;
    let diff = Math.abs(hourDegrees - minuteDegrees);
    if (diff > 180) diff = 360 - diff;
    console.log(`The angle between hour hand and minute hand is ${diff} degrees`);
}

 //Q. 17: count the intiger array how many times interger repetes
function countIntArray() {
    let ints = [10, 45, 15, 15, 10, 45, 39, 21, 26];
    let counts = {};
    for (let number of ints) {
        counts[number] = (counts[number] || 0) + 1;
    }
    for (let key in counts) {
        console.log(`Number: ${key}, Count: ${counts[key]}`);
    }
}

main();

