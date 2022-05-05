let b; //선언문
b = 2; //표현식, 할당문

// let a = let b;
let a = b = 2; // b에 2를 할당한 다음에, b라는 변수의 값이 평가가 되어서, b의 값이 2가 되면, 그 2가 a에 재할당 된다. 
console.log(a);