/* 4. Write function move(array,index,offset) that in a given array moves
element at a given index on a given offset positions (if offset > 0-> to
right, otherwise to left).
Examples: function move(array,index,offset) move(numbers,3,-1)->
numbers=[1,2,4,3,5,6,7]; (element at index 3 (4) is moved on 1 position left)
move(numbers,2,4)
->numbers=[1,2,4,5,6,7,3]. (element at index 2 (3) is moved
on 4 positions right)
Note: all examples imply the original array of numbers ( let
numbers=[1,2,3,4,5,6,7])
*/
let numbers=[1,2,3,4,5,6,7]; 
function move(array, index, offset) {
    let newI = offset + index;
    let value = array[index];
    array.splice(index,1);
    array.splice(newI,0,value);
    return array;
}
console.log(move(numbers,3,-1));
console.log(move(numbers,2,4));