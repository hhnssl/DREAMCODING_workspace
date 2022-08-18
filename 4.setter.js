// ㄴ 접근자 프로퍼티(Accessor Property): 클래스의 상태처럼, 변수처럼 보이는데 실제로는 함수인 것
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log("set", value);
  } // 할당할 때 호출됨
}

const student = new Student("수지", "김");
student.firstName = "안나";

console.log(student.fullName); //get이 호출됨
student.fullName = "김철수"; // 이것처럼 무언가를 할당하면 set이 호출되어 값이 인자로 전달됨
