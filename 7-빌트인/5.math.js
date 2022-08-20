// 수학 관련 함수
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// static properties, method
console.log(Math.E); // 오일러의 상수, 자연로그의 밑
console.log(Math.PI); // 원주율 PI값

// static method
// 절대값
console.log(Math.abs(-10));

// 소수점 이하를 올림
console.log(Math.ceil(1.4));

// 소수점 이하를 내림
console.log(Math.floor(1.4));

// 소수점 이하를 반올림
console.log(Math.round(1.4));
console.log(Math.round(1.7));

// 정수만 반환
console.log(Math.trunc(101.232323));

// 많이 쓰이는 것!!
// 최대, 최소값 찾기
console.log(Math.max(1, 3, 5));
console.log(Math.min(1, 3, 5));

// 거듭제곰
console.log(3 ** 2);
console.log(Math.pow(3, 2)); // 위와 같은 값을 반환하는 함수

// 제곱근
console.log(Math.sqrt(9));

// 정말 많이 쓰는 것!!
// 랜덤한 값 반환 (0과 1 사이의 값 중에서)
console.log(Math.random());
// 1 ~ 10 사이의 랜덤한 수
console.log(Math.floor(Math.random() * 10 + 1));
