// 잘라진 **새로운 배열** 만들기
const fruits = ["바나나", "사과", "레몬"];

let newArr = fruits.slice(0, 2); // 0부터 2개를 넣음
console.log(newArr);
console.log(fruits); // 원본 배열은 변화없음
// 참고로 인자를 몇 개 넣는지, 안넣는지에 따라 결과 다름!1

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat()); // 1단계의 중첩만 풀어줌
console.log(arr.flat(2)); // 2단계까지 풀고 싶으면

// fill: 특정한 값으로 배열을 채우기 // fill은 배열 자체를 수정함
arr = arr.flat(3);
arr.fill(0);
console.log(arr);

arr.fill("s", 1, 3); // 1부터 3 전까지 s로 채우기
console.log(arr);

// 배열을 합쳐서 문자열로 변환하기 join
let text = arr.join();
console.log(text);

text = arr.join("|");
console.log(text);

// 인자 전달에 따른 결과와 원본에 영향을 끼치는지 안끼치는지
