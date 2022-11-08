/* 3. Write function arrayCopy that gets the following parameters : function
arrayCopy(src,srcPos,dst,dstPos,length) {....}
where: src - source array, srcPos - index of the source array, dst - array destination, dstPos
- index of destination array, length - number of elements. This function should copy length elements from
source array beginning from srcPos index to
destination array from dstPos index
Example:
 let arS = [1,2,3,4,5,6,7]; let arD = [10,20,30,40,50,60,70]
arrrayCopy(arS, 3, arD, 4, 3); 
Result: arS is not updated, arD =[10,20,30,40,4,5,6,50,60,70]
*/
let src = [1,2,3,4,5,6,7];
let dst = [10,20,30,40,50,60,70];
function arrayCopy(src,srcPos,dst,dstPos,length) {
    let slicedSrc = src.slice(srcPos, (srcPos + length));
    dst.splice(dstPos, 0, slicedSrc[0], slicedSrc[1], slicedSrc[2]);
    return console.log(dst);

}
arrayCopy(src, 3, dst, 4, 3);