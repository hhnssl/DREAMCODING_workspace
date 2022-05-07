// 동등 비교 관계 연산자 Equality operators
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2); // true
console.log(2 != 2); //false
console.log(2 != 3); // true
console.log(2 == 3); // fasle
console.log(2 == '2'); //true
console.log(2 === '2'); //false
console.log(true == 1); //true

console.log(true === 1); //false

console.clear();


const obj1 = {
  name: 'js', 
}

const obj2 = {
  name: 'js', 
}

console.log(obj1 == obj2); //false!!!!!!! obj1과 obj2의 값은 메모리 주소이기 때문에!! 서로 다른 메모리 주소를 가지고 있기 때문에값이 다를 수 밖에 없다!!
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name); //true
console.log(obj1.name === obj2.name); //true

let obj3 = obj2; // 주소를 복사해서 넣는다
console.log(obj3 == obj2); //같은 메모리 주소를 넘겼기 때문에 true!
console.log(obj3 === obj2);



// 5강까지 완료!!!