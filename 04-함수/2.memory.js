function add(a, b){
  return a+b;
}

const sum = add; //add에 들어있는 함수의 주소를 sum에 똑같이 집어넣는다.

console.log(sum(1, 2));
console.log(add(2, 4));