// 배열의 함수들
// 배열 자체를 변경하ㅡㄴ지, 새로운 배열을 반환하는지 <= 에 초점을 맞추고 배울 것
const fruits = ["바나나", "사과", "레몬"];

// 특정한 오브젝트가 배열인지 체크
// isArray(): 배열이라면 true 반환
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// indexOf(): 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf("사과"));

// 배열안에 특정한 아이템이 있는지 없는지 체크
console.log(fruits.includes("사과"));
console.log(fruits.includes("배"));

// 배열에 아이템 추가 삭제 - 좋은 version~
// 추가 - 제일 뒤에: push(): 배열 **자체**를 수정(업데이트)
fruits.push("메론");
console.log(fruits);

//추가 - 제일 앞에
fruits.unshift("가지");
console.log(fruits);

//제거 - 제일 앞에. pop() 제거하면서 제거 한거 반환
console.log(fruits.pop());
console.log(fruits);

// 제거 - 제일 뒤에
console.log(fruits.shift());
console.log(fruits);

// 중간에 추가 삭제
console.log(fruits.splice(1, 1)); // 1인덱스에서 부터 1개 삭제하겠다.
console.log(fruits);
// splice는 삭제 뿐만 아니라 추가도 가능
fruits.splice(1, 0, "샤인머스켓", "고구마"); // 1인덱스에서 부터 0개를 삭제하고 샤머와 고구마를 추가하겠다.
console.log(fruits);
