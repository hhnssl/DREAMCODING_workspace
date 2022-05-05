let integer = 123; //정수
let negative = -123; //음수
let double = 1.23;

console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; //2진수로 
let octal = 0o173; //8진수
let hex = 0x7b; //16진수

console.log(binary);
console.log(octal);
console.log(hex);

console.log(0/123); //0
console.log(123/0); //Infinity: 숫자를 0으로 나누면 Infinity이다!
console.log(123/-0); //-Infinity
console.log(123/'text'); //NaN (Not a Number)

let bigInt = 123585132132151681513221111111111111316978464513213255n;
console.log(bigInt);