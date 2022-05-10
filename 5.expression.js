// 함수 선언문 : function name(){} 
// 함수 표현식 : const name = function(){} | 표현식이란? 값으로 평가될 수 있는 것 | 함수도 객체이기 때문에 할당이 가능한 것이다.
// 표현식으로 사용되는 함수는 이름을 작성해도 되지만, 외부에서는 접근 할 수 없다. 
// ㄴ 아래의 무명한수에 function sum()이라는 이름을 붙여도 sum()으로 호출할 수 없다 무조건 add로만 호출할 수 있다.

// 무명함수: 함수의 이름이 없음
let add = function(a, b){
  return a + b;
}

console.log(add(1, 2));

//화살표 함수 const name = () => {}
add = (a, b ) => {
  return a + b;
}
// add = (a, b ) => a + b; 값만 리턴하는 함수라면 이런식으로 생략 가능
console.log(add(100, 200));


// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸
// 결론: 함수 자체는 선언문으로 할 때는 '문'이지만, 함수는 값으로 계산될 수 있는 표현식이다. 


function run(){ console.log('야호'); } // 호출을 안해서 실행 안됨

//IIFE(Immediately-Invoked Function Expressions). 많이 사용되는 표현식은 아니다.
(function run(){ console.log('야호'); })(); // 괄호로 묶으면 함수가 값으로 변환이 되어서, 함수() <- 이런식으로 주소를 호출하게 되어 바로 실행됨
