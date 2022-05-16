//return 을 명시적으로 하지 않으면 자동으로 undefined가 반환됨.

function add(a, b){
  return a + b;
}

const result = add(1, 2);
console.log(result);

function print(text){
  console.log(text);
  // return undefined가 자동으로 생긴다.
}
print('text');


//return 을 함수 중간에 하게 되면 함수가 종료됨
// 사용 예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!!!
function print(num){
  if(num < 0){
    // 조건이 맞지 않으면 바로 반환해버린다.(==즉시종료)
    return; //===return undefined;
  }else{
    console.log(num);
  }
}
print(-1);
print(11);
print('aofhd');
print('');