
// 1.
// Write function minMax(numbers)
// 1.1.Takes array of numbers
// 1.2. Returns array containing two numbers: first is minimal value , second is maximal value form input array
// 1.3. Example: minMax([1, 2, 3, 4, 5]) returns array [1, 5]
// 1.4. Implementation Requirements
// 1.4.1. Apply the reduce pattern for getting result array by one “reduce” method

let arr = [1,2,3,4,5,];
console.log(` array 1 = ${arr}`);
function minMax(numbers) {
    return arr.reduce((minmax, num) => {
        if(num < minmax[0]){
         minmax[0] = num;
        }
        if(num > minmax[1]){
            minmax[1] = num;
           }
           return minmax;

    },[arr[0],arr[0]]);
}
console.log(` minMax =  ${minMax(arr)}`);
//-------------------------------------------------------------------------------------------------
// 2.
// Write function deleteWithPrefix(strings, prefix)
// 2.1.Takes array of strings and a prefix value
// 2.2. Returns array containing the strings from the input array without strings starting with a given prefix
// 2.3. Example: deleteWithPrefix([“abc”, “old_abc”, “lmn”, “123”, “old_lmn”], “old_”) returns array [“abc”, “lmn”, “123”]

let strings = ["abc", "old_abc", "lmn", "123", "old_lmn"];
let prefix = "old_";

function deleteWithPrefix(strings, prefix){
    return strings.filter(str => !str.startsWith(prefix));
}
console.log(`array -  ${strings}, prefix -  ${prefix}, array with prefix -  ${deleteWithPrefix(strings, prefix)}`);
  //------------------------------------------------------------------------------------------------------------------------------

// 3.
// Write function getSortedEvenOdd(numbers)
// 3.1. Takes array of numbers
// 3.2. Returns array sorted in the following order
// 3.2.1. First numbers should be the even ones in the ascending order
// 3.2.2. Last numbers should be the odd ones in the descending order
// 3.3. The input array of numbers must not been updated
// 3.4. Example: getSortedEvenOdd(numbers) returns new array with no update of 
// “numbers”. let numbers=[1,6,3,8,5,2,7,4] then being returned array will be [2, 4, 6, 8, 7, 5, 3, 1]

let numbers=[1,6,3,8,5,2,7,4];


function getSortedEvenOdd(numbers){
    let even = numbers.filter((n) => n % 2 == 0);
    let odd = numbers.filter((n) => n % 2 > 0);
    let sortedE = even.sort((a,b) => a-b);
    let sorted = odd.sort((a,b) => b-a);
    sortedE.push(sorted);
    return sortedE;

}
console.log(`unsorted arrey - ${numbers}, sorted - ${getSortedEvenOdd(numbers)}`);