// 반복문 Loop statement
// for(변수선언문; 조건식; 증감식){}
// 실행순서: 
// 1. 변수선언문
// 2. 조건식의 값이 참이면 {}코드 블럭 수행
// 3. 증감식 수행
// 4. 조건식이 거짓이 될 때까지 2번과 3번을 반복함

for (let i = 0; i < 5; i++){
  console.log(i);
}

for (let i = 0; i < 5; i = i + 2){
  console.log(i);  
}


for (let i = 0; i < 5; i++){
  for(let j = 0; j < 5; j++){
    console.log(i, j);
  }
}

// 무한루프
// for(;;){
//   console.log('우악');
// }

// 반복문 제어: continue, break
for(let i = 0; i < 20; i++){
  if (i === 10){ //i가 10이 되는 순간 실행 된다.
    // continue; i가 10이 되면 해당 차수는 넘어가서 다음 반복 차수 실행. ==> 10만 출력 안함
    console.log('i가 드디어 10이 되었다!');
    // break; i가 10이 되면 반복문을 아예나가버려서 9까지만 출력
    // break;
  }
  console.log(i);
}