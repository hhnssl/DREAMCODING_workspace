// undefined: 메모리상에 어떤 데이터도 들어있지 않고, 정해져 있지 않은 상태
// null: 아무 값도 담지 않았다고 정확하게 명시할 때 사용할 수 있다.

let variable;
console.log(variable);

variable = null;
console.log(variable);


let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태

// console.log(typeof 123);
// console.log(typeof '123');
console.log(typeof null); // object: 메모리상에 null이라는 오브젝트가 할당돼서 들어가기때문에 비어있다는 걸 나타낼 수 있다.
console.log(typeof undefined); // undefined: 변수만 정의만 해놓으면 메모리 상에 아무것도 들어가 있지 않은 상태

