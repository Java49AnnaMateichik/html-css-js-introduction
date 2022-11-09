/* 1. Write function ulSurround that surrounds array 
of strings inside <ul></ul> element.
1.1 Example of input array
let strings=["abc","lmn","cd"]
1.2 Output array for the above example
-
let ulSurrounding = ulSurround(strings) ["<ul>","<li>abc</li>","<li>lmn</li>","<li>cd</li>","</ul>"]
*/

let strings = ["abc","lmn","cd"];
let str = ulSurround(strings);

function ulSurround(strings) {
    let str = strings.map(function(element,index) {
        return '<li>' + element + '</li>';
    });
    str.splice(0, 0, '<ul>');
    str.splice(str.length, 0, '</ul>');
    return str;

}

console.log(str);
