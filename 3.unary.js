// 단항 연산자 Unary Operators
// + (양)
// - (음)
// ! (부정)

let a = 5;
a = -a; // -1 * 5와 같다.
console.log(a);

a = -a;
console.log(a);

a = +a;
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);


// +의 다른 용도: 숫자가 아닌 타입들을 **숫자로 변환**하면 어떤 값이 나오는지 확인할 수 있음
console.clear();
console.log(false);
console.log(null);
console.log('');
console.log(+false); //0
console.log(+null); //0
console.log(+''); //0 
console.log(+true); //1
console.log(+'text');
console.log(+undefined);

console.clear();
// !!
console.log(1); //1
console.log(!1); //false ! 부정연산자
console.log(!!1); //true !! 값을 boolean 타입으로 변환함