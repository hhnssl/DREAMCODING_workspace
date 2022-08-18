// get : 속성의 한부분이라고 간주되는 것들을 함수로 만들어야 할 때, get 이라는키워드를 붙이면 함수호출방법이 아닌 프로퍼티 호출방법을 쓸 수 있다.
// ㄴ 접근자 프로퍼티(Accessor Property): 클래스의 상태처럼, 변수처럼 보이는데 실제로는 함수인 것
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
}

const student = new Student("수지", "김");
// console.log(student.fullName());
// fullName은 함수가 아니라 속성이다? 근데 함수처럼 ()로 호출하느 게 이상하다? 흠..
// ㄴ 그래서 일반 프로퍼티에 접근하는 것처럼 하고 싶다!! ==> 접근자 프로퍼티 사용하기!
console.log(student.fullName); // <- get 키워드를 붙여서 일반 프로퍼티에 접근하는 것처럼 만듦.
