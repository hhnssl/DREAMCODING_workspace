// Boolean
// const isTrue = new Boolean(true); // 객체로 불리언 만들기 <- 메모리 더 많이 소비
const isTrue = true; // 원시타입으로 불리언 만들기
console.log(isTrue.valueOf()); // valueOf(): 그냥 불리언값 출력해주는..

/**
 * Falsy: 거짓이 되는 값
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 * Truthy: 참이 되는 값
 * 1
 * -1
 * '0'
 * 'false'
 * []
 * {}
 */

// 참고: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
