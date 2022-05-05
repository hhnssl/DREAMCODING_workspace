//let은 재할당 가능
let a = 1;
a = 2;


//const는 재할당 불가능
// 1.상수
// 2. 상수 변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 실행은 되나 오류가 난다.

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name:'apple',
  color:'red',
  display:'사과',
}

// apple = {}; 불가능
// 재할당이 필요없는 경우는 웬만하면 const를 사용하는 것이 좋다!


console.log(apple);
apple.name = 'orange';
apple.display = '오렌지';
console.log(apple);
// const인데 객체 안의 값이 변경가능한 이유?
// 변수 apple이 가리키고 있는 메모리셀에 다른 값이 재할당 불가능할 뿐,
// 메모리셀의 주소가 가리키고 있는 값 자체는 수정이 가능하다!

// 정리하자면, 재할당이 불가능할 뿐, 안의 값 변경은 가능하다!!