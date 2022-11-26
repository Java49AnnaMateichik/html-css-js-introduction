//1
// function isAnagram(str1, str2 ){
//     return Array.from(str1).sort().join('') == Array.from(str2).sort().join('')
// }
//2
function isAnagram(str1, str2) {
    let res = false;
    if(str1.length == str2.length) {
        const str1Occurrences = GetSymbolOccurrences(str1);
        res = checkAnagram(str1Occurrences, str2);
    }
    return res;
}
function symbolProcessing(res, cur){
    if(res[cur] == undefined){   // if(res[cur]){
        res[cur] = 1;            //   res[cur]++;
    }else{                       // }else{  
        res[cur]++;              //   res[cur] = 1;
    }                            // }
    return res;                  // return res;
}
function GetSymbolOccurrences(string){
    const stringArray = Array.from(string);
     return stringArray.reduce(symbolProcessing
     ,{});
}

function checkAnagram(occurrences,string){
   //let res = true;
   const stringArray = Array.from(string);
   
   
   return stringArray.every(symbol => {
    let res = false;
    if(occurrences[symbol]) {
        res = true;
        occurrences[symbol]--;
    }
    return res;
   })
}
isAnagram("yellow","wolley")
let str1 ="yellow";
console.log(isAnagram(str1, "weloly"));
console.log(isAnagram(str1, "leloyw"));
console.log(isAnagram(str1, "wolley"));
console.log(isAnagram(str1, "weloyl"));
//false
console.log(isAnagram(str1, "leloy")); //length
console.log(isAnagram(str1, "weloll"));//l = 3
console.log(isAnagram(str1, "wollet"));//t?
console.log(isAnagram(str1, "weloyo"));//o =2
    // for(let i = 0; i < stringArray.length;i++){ >>>>>not good cose working until the end
    //   const symbol = stringArray[i];
    //   if(occurrences[symbol]) {
    //     occurrences[symbol]--;
    //   } else {
    //     return false;
    //   }
    // }
    //  return res;
    //........................................................or
   // let i = 0;
//    while( i < stringArray.length && res){  //good cose ending while found symbol that dont exist => false
//       const symbol = stringArray[i];
//       if(occurrences[symbol]) {
//         occurrences[symbol]--;
//         i++;
//       } else {
//        res = false;
//       }
//     }
//     return res;

