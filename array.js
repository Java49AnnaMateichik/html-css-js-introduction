// let ar = [];
// ar[10000] = 100;
// ar[1] = [1, 2, 3];
// console.log("length of array = ",ar.length);
// ar[0] = "hello";
// console.log("10000-th element = ", ar[10000]);
// console.log("0-th element = ", ar[0]);
// console.log("1-th element = ", ar[1]);
// let str = "Hello";
// let arStr = Array.from(str); //getting array of the string's symbols
// console.log("String 'Hello' -> array is ", arStr);
// for (let i = 0; i < arStr.length; i++) {
//     console.log("element at index ", i, arStr[i]);
// }
// function println(element, index, array) {
//     console.log("element at index ", index, element);
// }
// arStr.forEach(println);
// let arCodeAscii = arStr.map(function(symbol, index) {
//     return index % 2 == 0 ? symbol.charCodeAt() : symbol;
// })
// console.log(arStr, arCodeAscii);
// let sumAscii = arStr.reduce(function(res, cur) {
//     return res + cur.charCodeAt();
// }, 0)
// console.log("sum of ascii ", sumAscii)
// console.log(arStr.reduce(function(res, cur) {
// return res + cur
// }, ""));
function getNumberOddIndex(element) {
    let res = element * 2;
    if (res > 9) {
        res -= 9;
    }
    return res;
}
function getCurrentNumber(element, index) {
    return index % 2 == 0 ? +element : getNumberOddIndex(element);
}
function getArrayForSum(teudatStrNumber) {
    let array = Array.from(teudatStrNumber);
    return array.map(getCurrentNumber);
}
function getSum(array) {
    // let res = 0;
    // for (let i = 0; i < array.length; i++) {
    //     res += array[i];
    // }
    return array.reduce(function (res, cur) {
        return res + cur;
    }, 0);
}

function checkTeudatZehut(teudatStrNumber) {
    //TODO
    //control sum of for even index digit value, for odd index digit * 2
    //control sum should be divide on 10 with no remainder
    //example 123456782 => 1 + 4 +3 + 8 +5 + 3 + 7 + 7 + 2 => true
    //    123456783 => 1 + 4 +3 + 8 +5 + 3 + 7 + 7 + 3 => false
    let res = false;
    if (teudatStrNumber.length == 9 && !isNaN(teudatStrNumber)) {
        let arrayForSum = getArrayForSum(teudatStrNumber);
        let sum = getSum(arrayForSum);
        res = sum % 10 == 0;
    }
    return res

}
function generateRandomTeudatZehut() {
    //TODO
    //returns string of 9 symbols matching checkTeudatZehut
    //make 8 random digits from 0 to 9
    //9 - th symbol should be with accordance of matching
    //to get random digit Math.round(Math.random() * 9)
}
// console.log(checkTeudatZehut('123456783'));

let numbers = ['123456782', '1234', 'abcd123', '123456783'];
numbers.forEach(function (e) {
    console.log(`teudat zehut: ${e}, return of the method checkTeudatZehut: ${checkTeudatZehut(e)}`)
});
//=========================hw14========================
// function ulSurround(strings) {
//     let res = strings.map(str => `<li>${str}</li>`)
//     res.unshift("<ul>");//res.splice(0, 0, "<ul>"); 
//     res.push("</ul>");//res.splice(strings.length, 0, "</ul>")
//     return res;
// }
// let ar = ["123", "abc", "lmn", "lmn"];
// console.log(`input: ${ar} output: ${ulSurround(ar)}`)
// function count(array, element) {
//     return array.reduce((res, cur) => cur == element ? res + 1 : res, 0);
// }
// let str = "abc"
// console.log(`input: ${ar}, counter of ${str} is ${count(ar, str)} `)
// function arrayCopy(src, srcPos, dst, dstPos, length) {
//     let arForCopy = src.slice(srcPos, srcPos + length); 
//     dst.splice(dstPos, 0, ...arForCopy);
//     //arForCopy.forEach((e, i) => dst.splice(dstPos + i, 0, e));
//     return dst;
// }
// let ar1 = [1, 2, 3, 4, 5, 6];
// let ar2 = [10, 30, 40, 50];
// arrayCopy(ar1,2,ar2,1,3);

// console.log(`ar1: ${ar1}, ar2: ${ar2} arrayCopy(ar1,2,ar2,1,3): ${ar2}`)

// function move(array, index, offset) {
//     let movedElem = array.splice( index, 1)[0];
//     array.splice(index + offset, 0, movedElem);
//     return array;
// }
//=================================cw15==========================================

function getEvenNumbers(numbers) {
    let res = numbers.filter((n) => i % 2 == 0);
    return res;
}
//console.log(res);

let ar=[ 2,9, 3, 1999];
ar.sort((a, b)=>a - b);

console.log(ar);
ar = ["abc","a", "lmn", "y"];
ar.sort((a, b)=>a.length - b.length);
console.log(ar);