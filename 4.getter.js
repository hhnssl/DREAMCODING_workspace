// 접근자 프로퍼티 (Accessor Property) : get, set
class Student{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(){
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value){
    console.log('set', value);
  }
}


const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
// console.log(student.fullName()); get을 붙이기 전에는 이렇게 함수를 호출해야 했는데
console.log(student.fullName); // get을 붙여 이렇게 프로퍼티에 바로 접근이 가능해졌다.

student.fullName = '김철수'; // set이 호출됨