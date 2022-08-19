// 주석 Comments
// 한줄
// TODO(작성자): 해야할 일을 작성

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜, 어떻게를 설명하는 것이 좋음
 * 단, 정말 필요한 경우에만
 */

//외부에서 많이 쓰이는 함수 API인 경우 JSDOC을 사용하면 좋다. https://github.com/jsdoc/jsdoc

//함수 위에서 /**을 입력하면 자동완성 뜸
/**
 * 첫줄: 함수에 대한 설명 ( 주어진 두 인자를 더한 값을 반환함)
 * @param {*} a 숫자1
 * @param {*} b 숫자2
 * @returns a와 b를 더한 값
 */
function add(a, b) {
  return a + b;
}
