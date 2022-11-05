const nineDigits = '012345678';
const minDigit = 0;
const maxDidit= 9;
const char0 = '0'.charCodeAt();

function checkTZ(tzStr) {
     if(tzStr.length != nineDigits.length || isNan(+tzStr)) {
        console.log("TZ=",tzStr,'valid=',false);
        return false;
     }
     let ctrlSum = getControlSum(tzStr);
     let valid = ctrlSum % 10 == 0;
     console.log("TZ=", tzStr, "ctrlSum=", ctrlSum, 'valid=', valid);
     return valid;
    }

function getControlSum(tzStr) {
    let array = Array.from(tzStr).map(function(symbol, ind){
        let value = symbol.charCodeAt() - char0;
        return ind % 2 == 0 ? getEvenValue(value) : getOddValue(value*2);
    });
    return array.reduce(function(sum,cur){
        return sum+cur;
    },0);
//     return Array.from(tzStr).map(function(symbol, ind){
//         let value = symbol.charCodeAt() - char0;
//         return ind % 2 == 0 ? getEvenValue(value) : getOddValue(value*2);
//     }).reduce(function(sum,cur){
//         return sum+cur;
//     },0);
// }

    function getOddValue(num) {
        return num<10 ? num : num%10 + Math.trunc(num/10);
    }
    function getEvenValue(num) {
        return num;
    }
//------------------------------------------------------------------------------------------
function generateTZ() {
    let array = getGeneratedArray ();
    array[8] = updateCtrlDigit(array);
    if(!checkTZ(intArray2Str(array))) {
        console.log('Generation failed'); 
    }
}

function getGeneratedArray() {
    return Array.from(nineDigits).map(function(symbol, ind){
        let value = (ind==8) ? 0 : getRandomIntegerValue(minDigit, maxDidit+1);
        return ind % 2 == 0 ? getEvenValue(value) : getOddValue(value*2);
    });
}

function intArray2Str(array) {
return array.reduce(function(str, cur) {
    return str + String.fromCharCode(cur + char0);
}, "");
}
function updateCtrlDigit(array) {
    let sum = getControlSum(intArray2Str(array));
    let roundedSum = Math.floor(sum/10)*10;
    if(roundedSum === sum) { 
        return 0;
    }
    return roundedSum+10-sum;
}

function getRandomIntegerValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


checkTZ('342727849');
checkTZ('9786555456');
checkTZ('324663442');
checkTZ('gf2465');
generateTZ();