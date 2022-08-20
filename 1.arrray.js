// 배열에는 동일한 타입의 값을 넣는 것이 좋다.

//1.  2개의 아이템을 저장할 수 있는 배열 생성하기
let array = new Array(2);
console.log(array);

// 2. 아이템을 넣은 채로 배열 생성하기
let array2 = new Array(1, 2, 3);
console.log(array2);

// 3. of(): 사이즈 정하는 것 없이 넣는대로 무한하게 넣고 싶을 때
let array3 = Array.of(1, 2);
console.log(array3);

// 4. 리터럴
const array4 = [1, 2, 3, 4, 5];
console.log(array4);

// 5. 기존의 배열로부터 **새로운** 배열을 만들고 싶을 때(=== 복사) from
const arrayCopy = Array.from(array4);
console.log(arrayCopy);

// 5-1. from은 순회가능한(이터러블) 모든 것을 전달할 수도 있다. 문자열 순회가 가능함
const array5 = Array.from("문자열도가능");
console.log(array5);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 함(다른 언어에서는)
// 하지만!! 자바스크립트에서의 배열은 연속적으로 이어져있않고, 오브젝트와 유사하다
// so, 자바스크립트의 배열은 일반적인(다른 언어의) 배열의 동작을 흉내낸 특수한 객체다...!
// ㄴ 이걸 보완하기 위해서 타입이 정해져있는 타입 배열이 있음(Typed collection)
const array6 = Array.from({
  0: "안",
  1: "녕",
  length: 2,
});
// 오브젝트(객체)로부터 배열을 만듦. 숫자는 인덱스, length는 배열크기
console.log(array6);
