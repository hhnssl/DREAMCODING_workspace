// 매개변수의 기본값은 무조건 undefined(==매개변수가 없으면)
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개 변수 기본값 Default Parameters 
function add(a, b){
  console.log(a);
  console.log(b);

  console.log(arguments); // 전달된 인자를 알려준다.
  console.log(arguments[0]); // 배열처럼 사용 가능함 but 잘 쓰이지 않음~ 알아만 둬
  return a + b;
}

add(); //undefined
add(1, 2, 3); // 3은 무시된다.


// 기본값
function add2(a = 100, b = 100){
  console.log(a);
  console.log(b);

  return a + b;
}

add2();
add2(5, 5);


//Rest 매개변수 Rest Parameters
// ... <= 얼마나 많은 개수의 인자가 들어올 건지 모를 때 배열로 받는다.
// function sum(...numbers){
function sum(a, b, ...numbers){
  // 첫번째 인자와 두번째 인자는 각각 a, b에 담고 나머지는 배열로
  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5);
sum(1, 2, 3, 4, 5, 6, 7, 8);