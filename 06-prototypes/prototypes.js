function myFunctionTest(expected, func) {
    if (expected === func()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED. Found " + func();
    }
}


function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log("Expected output of max(20, 10) is 20 and  " + myFunctionTest(20, function () { return max(20, 10); }));


function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log("Expected output of maxOfThree(20, 10, 30) is 30 and  " + myFunctionTest(30, function () { return maxOfThree(20, 10, 30); }));


function isVowel(char) {
    return char === "a" || char === "e" || char === "i" || char === "o" || char === "u";
}
console.log("Expected output of isVowel('u') is true and  " + myFunctionTest(true, function () { return isVowel("u"); }));


function sum(array) {
    return array.reduce(function (prevValue, elem, i, array) {
        return prevValue + elem;
    });
}
console.log("Expected output of sum([1,2,3,4]) is 10 and  " + myFunctionTest(10, function () { return sum([1, 2, 3, 4]); }));


function multiply(array) {
    return array.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    });
}
console.log("Expected output of multiply([1,2,3,4]) is 24 and  " + myFunctionTest(24, function () { return multiply([1, 2, 3, 4]); }));


function reverse(value) {
    return value.split("").reverse().join("");
}
console.log("Expected output of reverse('hello world!') is '!dlrow olleh' and  " + myFunctionTest("!dlrow olleh", function () { return reverse("hello world!"); }));


function findLongestWord(array) {
    let longest = 0;
    array.forEach(element => {
        if (element.length > longest) {
            longest = element.length;
        }
    });
    return longest;
}
console.log("Expected output of findLongestWord(['uriel', 'test', 'hey']) is 5 and  " + myFunctionTest(5, function () { return findLongestWord(["uriel", "test", "hey"]); }));


function filterLongWords(array, i) {
    return array.filter(element => element.length > i);
}
console.log("Expected output of filterLongWords(['uriel', 'test', 'hey','javascript'], 4) is ['uriel', 'javascript'] and  " + myFunctionTest(["uriel", "javascript"], function () { return filterLongWords(["uriel", "test", "hey", "javascript"], 4); }));


const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 10;
});
console.log(b);
const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log(c);
const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log(d);