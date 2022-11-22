
// 1.
// Write function isAnagram
// 1.1.Takes two parameters str1, str2 as strings
// 1.2. Returns true if str2 is an anagram of the str1, below see the anagram rules
// 1.2.1.The same length
// 1.2.2.The same symbols only in different order
// 1.3. Assumption: the strings contain only lower case letters
// 2.
// Examples for word “yellow” with printing out “true”
// 2.1. Console.log(isAnagram(word, “weloly”)
// 2.2. Console.log(isAnagram(word, “leloyw”)
// 2.3. Console.log(isAnagram(word, “wolley”)
// 2.4. Console.log(isAnagram(word, “weloyl”)
// 3.
// Example for word “yellow” with printing out
// “false”
// 3.1. Console.log(isAnagram(word, “weloll”) (three “l” letters, should be two)
// 3.2. Console.log(isAnagram(word, “leloy”) (should be with the same length)
// 3.3. Console.log(isAnagram(word, “wollet”) (letter “t” doesn’t exist)
// 3.4. Console.log(isAnagram(word, “weloyo”) ( two “o” letters, should be one)
// 4.
// Implementation hints:
// 4.1. Compare length values
// 4.2. By iterating str1 (consider array) create an object similar to the one
// (occurrences) we have created at the classwork #18 (just no need to sort, sorting is
// time consuming operation and performed only if there is a requirement. It’s not a case)
// 4.3. By iterating str2 (consider array) access an appropriate field in the object
// created in 4.2(No need to create occurrences object for the str2)
// 4.3.1. If the field doesn’t exist return false
// 4.3.2.If the field exists, decrement occurrences value
// 4.3.2.1.If occurrences value is the negative after decrementing, return false
// 4.3.3.After iteration the str2 return true with no additional check (think why
// we don’t need an additional check of the occurrences objects created in 4.2)


function displayOccurrences(strings) {
    let strAr = Array.from(strings);
    let occurrences = {};
    strAr.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });
    return occurrences;
}
function isAnagram(str1, str2){
    if(str1.length != str2.length ){
        return false;
    }
// get them to arrays+lower case
let arr2 = Array.from(str2.toLowerCase());
let occurrences1 = displayOccurrences(str1.toLowerCase());
arr2.forEach(i => {
    if(occurrences1[arr2[i]] == undefined){
        return false;
    }
    if(--occurrences1[arr2[i]] < 0){
        return false;
    }
    
})
    return true;

}
let str1 ="yellow";
//true
console.log(isAnagram(str1, "weloly"));
console.log(isAnagram(str1, "leloyw"));
console.log(isAnagram(str1, "wolley"));
console.log(isAnagram(str1, "weloyl"));
//false
console.log(isAnagram(str1, "leloy")); //length
console.log(isAnagram(str1, "weloll"));//l = 3
console.log(isAnagram(str1, "wollet"));//t?
console.log(isAnagram(str1, "weloyo"));//o =2