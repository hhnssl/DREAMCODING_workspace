// Static properties: 클래스를 이용해서 객체를 일일이 만들지 않아도, 클래스만으로도 접근이 가능한 속성
// Number 함수 확인: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// Static method와 instance method의 차이:
// static method는 클래스 메소드로도 불림
// 클래스 내부에서 정의하지만, 인스턴스에는 속하지 않음

// 둘의 가장 큰 차이점은 객체 생성 여부
// Static method: 객체 생성하지 않고 클래스명.메서드명 으로 호출 가능
// Instance method: 반드시 객체 생성 후에 호출 가능 === 인스턴스가 반드시 존재해야만 사용할 수 있다.

//
const num1 = 123;
const num2 = new Number(123); // 특별한 용도를 위해서가 아니면, 메모리 낭비임
console.log(num1); // 원시
console.log(num2); // 객체

console.log(typeof num1);
console.log(typeof num2);

// 클래스레벨에서 접근 가능
console.log(Number.MAX_VALUE); //최대로 사용할 수 있는 값
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// 위의 것들을 언제 쓰느냐?
if (num1 === Number.NaN) {
  // num1이 숫자인지 아닌지 확인할 수 있음
}

if (num1 < Number.MAX_SAFE_INTEGER) {
  // num1이 가장 큰 값보다 작은지 아닌지 검사할 수 있음
}

if (Number.isNaN(num1)) {
  // num1이 숫자인지 아닌지 확인할 수 있음
}

// 지수 표기법( 매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

// 그 나라에 맞는 숫자로 표기
console.log(num4.toLocaleString("ar-EG"));

// 원하는 자릿수까지 유효하도록 반올림 (자연수 포함해서)
const num5 = 12345.1234;

console.log("허허");

console.log(num5.toPrecision(5));
console.log(num5.toPrecision(4));
console.log(num5.toPrecision(3));
console.log(num5.toPrecision(2)); // 전체 자릿수 표기가 안될 때는 지수표기법

console.log(Number.EPSILON); // 0 과 1 사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  // 0 보다 크고 1 보다 작으면 출력
  console.log(Number.EPSILON);
}

const num6 = 0.1 + 0.2 - 0.2; // 0.1 이 아니라
console.log(num6); // 0.1000000003 이런 식으로 미묘한 오차가 발생한다.

// 똑같은지 아닌지 검사하기
function isEqual(original, expected) {
  // return original === expected;
  return Math.abs(original - expected) < Number.EPSILON; // 차이가 엡솔론보다 작으면 true 반환시키기
}

console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num6, 0.1)); // false!
