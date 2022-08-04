console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// this: 전역 객체를 뜻함
// - 브라우저에서는 윈도우가 전역객체(브라우저 콘솔창에서 확인 ㄱ)
// - 노드에서 약간 다름. 노드에서 this는 현재 모듈에 있는 정보를 출력함
console.log(this);

eval("const num = 2; console.log(num)"); // 문자열이지만 자바스크립트 코드로 평가해서 출력함

console.log(isFinite(1)); // 숫자가 유한한지, 무한한지 평가
console.log(isFinite(Infinity)); // 무한해서 false

console.log(parseFloat("12.42")); // 문자열을 숫자로
console.log(parseInt("12.99"));
console.log(parseInt("12"));

//URL (URI의 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리해야한다.
const URL = "https://드림코딩.com";
const encoded = encodeURI(URL); // 한글이나 특수문자가 있는 주소가 있다면, 함수를 이용해 이스케이프 처리할 수 있다.
console.log(encoded);

// 디코드 하는 법
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = "드림코딩.com";

console.log(encodeURIComponent(part));
