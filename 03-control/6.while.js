//while(조건){}
// 조건이 false가 될때까지 {}코드를 반복 실행

let num = 5;
while(num >= 0){
  console.log(num);
  num--;
}

let isActive = false;
// let isActive = true;
let i = 0;
while(isActive){
  console.log('아직살아있다!');
  if(i === 15){ //i 가 15가 되면 반복문 나가기
    break;
  }
  i++;
}


do{
  console.log('do-while 아직 살아있다!');
  console.log('일단 한번 실행하고 조건식 검사하는 두와일');
} while(isActive);