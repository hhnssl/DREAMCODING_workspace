// 퀴즈 
let num = 11;
// num의 숫자가 짝수이면 up, 홀수라면 down을 출력

// if로 구현
if (num % 2 === 0){
  console.log('up');
}else{
  console.log('down');
}

// ternary로 구현
num % 2 === 0 ? console.log('up') : console.log('down');

// 위의 코드보다 아래 코드가 더 간결하다.
let result = num % 2 === 0 ? 'up': 'down';
console.log(result);