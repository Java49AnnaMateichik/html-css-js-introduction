
/* 2. Write function "count" that returns how many times a given element
encountered in a given array
2.1 Example of input array
let strings=["abc","lmn","cd","abc","abc"]
2.2 Output for the above example count(strings,"abc") will be 3 and
count(strings,"ab") will be 0
*/
let strings=["abc","lmn","cd","abc","abc"];
function count(array, element) {
    let res = {} ;
    array.forEach(function(a){
        res[a] = res[a] + 1 || 1;
    });
    // V.R. ?????
     for(var element in res)
     console.log("element " + element + " = " + res[element] + " times");
    /* V.R. There isn't return operator. Like this
    return res;
    That is why your log prints undefined
    */
    }
console.log(count(strings,"abc"));
   