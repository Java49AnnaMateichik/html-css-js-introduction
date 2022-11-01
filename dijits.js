function sumDigits(number) {
    //TODO
    //function should return sum of a given number digits
     if (number < 0){
        number *= -1;
     }
    let sum = 0, rest;
    while (number) {
        rest = number % 10;
        number = (number - rest) / 10;
        sum += rest;
    }
    return sum;
}
//Example
console.log(sumDigits(123)); //should be printed out 6