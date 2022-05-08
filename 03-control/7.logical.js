// 논리 연산자 Logical operator
// && 그리고
// || 또는
// ! 부정(단항연산자에서 온 것)
// !! 불리언값으로 변환(단항연산자를 응용한 것)

let num = 8;
// let num = 21;
if (num >= 0 && num < 9){
  console.log('0 이상 그리고 9 미만일 때만 출력');
}

// num = 30;
num = 20;
if (num <= 0 || num > 20){
  console.log('0 미만이거나 20 초과일 때만 출력');
}

if(num != 9)  {
  console.log('num이 9가 아니면 출력');
}

// 부정연산자
console.log(!'text');
console.log(!!'text');