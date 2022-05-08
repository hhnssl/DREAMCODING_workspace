// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인 경우: 거짓인 경우

let fruit = 'apple';
if(fruit === 'apple'){
  console.log('사과 이모지');
}else{
  console.log('웃는 이모지');
}

fruit === 'apple' ? console.log('사과 이모지') : console.log('웃는 이모지');

console.clear();

let emoji = fruit === 'apple' ? '사과' : '얼굴' // emoji라는 변수에, fruit가 'apple'이면 사과를 넣고 아니면 얼굴을 넣어라!
console.log(emoji);

let num = 1;
let result = (num === 1 ? 1 : 0); //num === 1 ? 1 : 0가 먼저 계산돼서 let result에 넣어지는 것
console.log(result);