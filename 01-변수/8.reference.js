//원시 타입은 값이 복사되어 전달됨
let a = 1;
let b = a; //1
b = 2;
console.log(a);
console.log(b);

//객체 타입은 참조값(메모리주소==레퍼런스)가 복사되어 전달됨
let apple = { // apple이라는 변수에 메모리주소인 0x123이 들어있다면
  name: '사과',
};
let orange = apple; // orange라는 변수에도 메모리주소인 0x123가 복사되어 들어간다.

orange.name = '오렌지';

console.log(apple); // orange를 바꿨는데 apple도 바뀌었다. 왜냐! 둘은 같은 메모리를 가리키고 있기 때문.
console.log(orange);

