// 산술 연산자(Arithmatic operators)
// +
// -
// *
// /
// %
// ** 지수(거듭제곱)

console.log(5 + 2);
console.log(5 / 2);
console.log(5 ** 2); //es7에서 추가됨
console.log(Math.pow(5, 2));  //es7 전에 사용되던 거듭제곱


// + 연산자 주의점!
let text = '두개의' + '문자를 더할때도 쓴다.';
console.log(text);

text = '1' + 1; //숫자와 문자열을 더하면 문자열로 변환됨!!!
console.log(text);