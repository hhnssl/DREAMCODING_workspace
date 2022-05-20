/* - 객체(복합 데이터): 서로 연관있는 속성과 행동을 묶어지기 위해
=> 밀접하게 관련 있는 상태와 행동을 객체로 묶어놔야 한다!*/


// 객체를 만드는 방법 3가지
// Object literal{key: value}
// new Object()
// Object.create();
// key <- 문자, 숫자, 문자열, 심볼
// value <- 원시값, 객체(함수)

let apple = {
  // 키에 따옴표를 하든 말든 상관 없음, 따옴표를 했을 때 하이픈으로 연결해줄 수 있단 차이뿐!('hello-one'과 같이~) 그러나 되도록이면 통일 시키기
  name: 'apple',
  'hello': '안뇽',
  'wow-bam': '와우 배엠',
  0: 1,
  ['hello-bye']: '잘가',
};

//속성, 데이터에 접근하기 위해서는
// apple.name <- 마침표 표기법 dot notation
// apple['name'] <- 대괄호 표기법 bracket notation (문자열 따옴표 필수)
console.log(apple.name);
console.log(apple[0]);
console.log(apple['hello-bye']);

// 속성 추가
apple.emoji = '사과 이모지';
console.log(apple);

// 속성 삭제
delete apple.emoji;
console.log(apple);