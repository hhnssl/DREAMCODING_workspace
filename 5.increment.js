// 증가 감소 연산자 Increment & Decrement operators
let a = 0;
console.log(a);

// a = a + 1;
a++; //증가연산자
console.log(a);

a--; // a = a - 1;
console.log(a);


console.clear();
//주의!!!!
// a++ : 필요한 연산을 하고, 그 뒤 값을 증가 시킴
// ++a : 값을 먼저 증가시키고, 필요한 연산을 함
a = 0;
let b = a++;// b에 0이라는 값을 먼저 할당하고, 그 뒤에 +1을 한다.
console.log(b); //b에는 0이 저장되어 있고
console.log(a); //a는 +1이 됨

console.log(a++); 
console.log(a); 