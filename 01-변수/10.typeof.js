// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환해주는 연산자
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123;
console.log(typeof variable);

// variable이 undefined였다가 string이 됐다가 number가 되는 것으로 볼때, 
// 자바스크립트는 할단된 값에 따라 타입이 결정되는 동적 타입이다 + (weakly type == 할당된 값에 따라 타입이 바뀐다.)

variable = {};
console.log(typeof variable);

variable = function (){};
console.log(typeof variable);  

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');

// 결론
// 자바스크립트에도 타입이 있다!
// 자스는 dynamic, weakly typed programming language이다!

