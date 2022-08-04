// 래퍼 객체(Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123; // number 원시 타입

console.log(number.toString()); // 점을 찍어서 함수를 호출하는 순간, number 원시 타입을 감싸고 있는 Number 객체로 감싸서 객체 형태로 사용 됨
console.log(number); // 얘는 다시 원시 타입임

//
const text = "text";
console.log(text); // 그냥 문자열 원시 타입임
text.length; // String 객체가 됨
text.trim(); // String 객체가 됨
