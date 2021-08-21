//Write a function to get the sum of n natural numbers.
const n = parseInt(prompt("Enter a NO."))
let s = 0;
for (let i = 0; i <= n; i++) {
    s += i
}
console.log(s); //

//  write the function to check if the number is even or not by using only if else statement

function Even(num) {
    if (num % 2 == 0)
        return "Even";
    else {
        return "Odd ";
    }
}


//Write a function it check if the number is prime or not.

function prime1(num) {
    if (num === 1) {
        console.log("Not Prime ")
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isprime = false;
                break;
            }
        }
        if (isprime) {
            console.log("Is a Prime Number")
        } else {
            console.log("Not Prime ");
        }
    }

}

//Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using switch case only.//
function Days(num) {
    let res = " ";
    switch (num) {
        case 1:
            res = " Monday";
            break;
        case 2:
            res = " Tuesday";
            break;
        case 3:
            res = "Wefnesday";
            break;
        case 4:
            res = " Thursday";
            break;
        case 5:
            res = "Friday";
            break;
        case 6:
            res = "Saturday";
            break;
        case 7:
            res = "Sunday";
            break;
        default:
            res = "Enter Valid Number ";

    }
    return res;
}
//Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using If Else only
function Days(num) {
    if (num === 1) {
        return "Manday";
    } else if (num === 2) {
        return "Tuesday";
    } else if (num === 3) {
        return "Wednesday";
    } else if (num === 4) {
        return "Thursday";
    } else if (num === 5) {
        return "Friday";
    } else if (num === 6) {
        return "Saturday";
    } else {
        return "Enter Valid Number From 1-7 "
    }
}
// WeekDaysUsing
function Days(num) {
    let d = (num === 1) ? "Monday" : (num === 2) ? "Tuesday" : (num === 3) ? "Wednesday" : (num === 4) ? "Thrusday" : (num === 5) ? "Friday" : (num === 6) ? "Saturday" : (num === 7) ? "Sunday" : "Number is Not valid";
    return d;
}
// WAF to search an element in the array

function searchElement(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return " Element is Found ";
        } else {
            return "Element Not Found ";
        }
    }
}


//WAF to find the max in the array?

function CheckMaxium(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

//WAF to find the min in the array?

function CheckMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
// WAF to find the factorial of n

function factrioal(n) {
    if (m == 0 || n == 1) {
        return 1;
    } else return (n * factrioal(n - 1));
}

// WAF to reverse an array

function reverse(arr) {
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    return arr1;
}


//WAF to reverse a string
function reversstring(str) {
    let str2 = " ";
    for (let i = str.length - 1; i >= 0; i--) {
        str2 += str[i];
    }
    return str2;
}


//WAF to reverse a string
function removeduplicate(arr) {
    int j = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] != arr[i + 1]) {
            arr[j++] = arr[i];
        }
        arr[j++] = arr[arr.length - 1];
        return j;
    }
}


//WAF to check if the number is a palindrome or not.

function checkpalindrome(num) {
    let temp, rem, flag = 0;
    temp = num;
    while (num > 0) {
        rem = num % 10;
        num = parseInt(num / 10);
        flag = flag * 10 + rem
    }
    if (flag == temp) {
        return "Number is palindrome";
    } else {
        return "Number is not Palindrome";
    }
}


//WAF to check if the string entered is the palindrome string or not.
function checkstringpalindrome(str) {
    let i = 0;
    let h = str.length - 1;
    while (h > i) {
        if (str[i++] != str[h--]) {
            return "String is Not Palindrome";
        }
    }
    return "String is Palindrome";
}

//WAF to count the number of words in the string.
function count(str) {
    return str.split(' ').length;
}


//WAF to print the number of days in the month using switch case.
function days(num) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dayCount = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dayCount = 30;
            break;
        case 2:
            dayCount = 28;
            break;
        default:
            dayCount = " Enter Valid Number";
    }
}


//WAF to check if the number is 0, -ve or +ve using switch case
function checkNumber(nim) {
    switch (num > 0) {
        case 1:
            return "Number is Positive";
            break;
        case 0:
            switch (num < 0) {
                case 1:
                    return " Number is Negative";
                    break;
                case 0:
                    return "Number is Zero";
                    break;
            }
            break;
    }
    return 0;
}


//WAF to check if the number is even or not using if else
function CheckEvenOdd(num) {
    let j = '';
    switch (num % 2) {
        case 0:
            j = "Even";
            break;
        case 1:
            j = 'Odd ';
            break;
        default:
            return "Enter Valid Number";
    }
}

//WAF to reverse only words in the string

function reverseString(str) {
    return str.split(" ").reverse().join("");
}


reverseString("This is Sample Input");

//WAF to count the occurrence of a given characters in the string.
function countOccurrence(str, char) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == c)
            res++;
    }
    return res;
}