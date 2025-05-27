
// Q.1: How to reverse a string?
function reverseString(str: string): void {
    let charArray = str.split('');
    let i = 0, j = str.length - 1;
    while (i < j) {
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
        i++;
        j--;
    }
    console.log(charArray.join(''));
}
// Q.2: How to find if the given string is a palindrome or not?
function checkPalindrome(str: string): void {
    let flag = true;
    for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
        if (str[i] !== str[j]) {
            flag = false;
            break;
        }
    }
    console.log(flag ? 'Palindrome' : 'Not Palindrome');
}
// Q.3: How to reverse the order of words in a given string?
function reverseWordOrder(str: string): void {
    const words = str.trim().split(/\s+/);
    console.log(words.reverse().join(' '));
}
// Q.4: How to reverse each word in a given string?
function reverseWords(str: string): void {
    const words = str.trim().split(/\s+/);
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    console.log(reversedWords.join(' '));
}

// Q.5: How to count the occurrence of each character in a string?
function countCharacter(str: string): void {
    const charCount: Record<string, number> = {};
    for (let char of str) {
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    for (let char in charCount) {
        console.log(`${char} - ${charCount[char]}`);
    }
}

// Q.6: How to remove duplicate characters from a string?
function removeDuplicate(str: string): void {
    let result = '';
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    console.log(result);
}

// Q.7: How to find all possible substring of a given string?
function findAllSubstrings(str: string): void {
    for (let i = 0; i < str.length; ++i) {
        let subString = '';
        for (let j = i; j < str.length; ++j) {
            subString += str[j];
            process.stdout.write(subString + ' ');
        }
    }
    console.log();
}

// Q.8: How to perform Left circular rotation of an array?
function rotateLeft(arr: number[]): void {
    const first = arr.shift();
    if (first !== undefined) arr.push(first);
    console.log(arr.join(' '));
}

// Q.9: How to perform Right circular rotation of an array?
function rotateRight(arr: number[]): void {
    const last = arr.pop();
    if (last !== undefined) arr.unshift(last);
    console.log(arr.join(' '));
}
// Q.10: How to find if a positive integer is a prime number or not?
function isPrime(number: number): boolean {
    if (number === 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    const sqrt = Math.floor(Math.sqrt(number));
    for (let i = 3; i <= sqrt; i += 2) {
        if (number % i === 0) return false;
    }
    return true;
}

// Q.11: How to find the sum of digits of a positive integer?
function sumOfDigits(num: number): void {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}

// Q.12: How to find second largest integer in an array using only one loop?
function findSecondLargest(arr: number[]): void {
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;

    for (const num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2 && num !== max1) {
            max2 = num;
        }
    }

    console.log(max2);
}

// Q.13: How to find Third largest integer in an array using only one loop?
function findThirdLargest(arr: number[]): void {
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;
    let max3 = Number.MIN_SAFE_INTEGER;

    for (const num of arr) {
        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2 && num !== max1) {
            max3 = max2;
            max2 = num;
        } else if (num > max3 && num !== max2 && num !== max1) {
            max3 = num;
        }
    }

    console.log(max3);
}

// Q.14: How to convert a two-dimensional array to a one-dimensional array?
function multiToSingle(array: number[][]): void {
    const rows = array.length;
    const cols = array[0].length;
    const result: number[] = [];

    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            result.push(array[row][col]);
        }
    }

    console.log(result.join(' '));
}

// Q.15: How to convert a one-dimensional array to a two-dimensional array?
function singleToMulti(array: number[], rows: number, cols: number): void {
    const multi: number[][] = [];
    let index = 0;

    for (let i = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j = 0; j < cols; j++) {
            row.push(array[index++]);
        }
        multi.push(row);
    }

    for (const row of multi) {
        console.log(row.join(' '));
    }
}

// Q.16: How to find the angle between hour and minute hands of a clock at any given time?
function angleBetweenClockHands(hours: number, mins: number): void {
    if (hours >= 12) hours -= 12;
    const hourDeg = (hours * 30) + (mins * 0.5);
    const minuteDeg = mins * 6;
    let diff = Math.abs(hourDeg - minuteDeg);
    if (diff > 180) diff = 360 - diff;

    console.log(`The angle between hour hand and minute hand is ${diff} degrees`);
}

//Q. 17: count the intiger array how many times interger repetes
function countIntArray(): void {
    const ints = [10, 45, 15, 15, 10, 45, 39, 21, 26];
    const counts: Record<number, number> = {};

    for (const num of ints) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (const [num, count] of Object.entries(counts)) {
        console.log(`Number: ${num}, Count: ${count}`);
    }
}
