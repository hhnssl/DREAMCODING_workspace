// 클래스 (Class)
// 객체를 생성할 수 있는 템플릿
// 클래스를 이용해서 만들어진 객체를 인스턴스(Instance) 라고 한다.

/*
클래스 문법
class ClassName {
   constructor(key) {
     this.key = value;
   }
   functionName() {};
 }
*/

class Likelion {
  // 생성자(constructor)
  // : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 프로토타입 메서드
  // class에 필요한 멤버 함수는 생성자 밖에서 함수를 정의하고 this.를 제외하고 바로 함수 이름만 작성한다.
  greeting = () => {
    console.log(`안녕! 내 이름은 ${this.name} 이고, ${this.age} 세야!`);
  };

  // 접근자 프로퍼티
  // get 사용하면 함수지만 호출하는 시점에 데이터를 만들어서 리턴을 하는데, 이것을 속성에 한 부분으로 간주하여 속성 접근처럼 사용
  // set 사용하면 함수에 새로운 인자를 할당할 수 있음
  get emoji() {
    return `${this.name} 🐶`;
  }

  // 정적 프로퍼티
  // 클래스 레벨의 메서드 : static 함수 사용
  // 클래스 레벨의 메서드(= static이 붙은 메서드)에서는 템플릿이기 때문에 this를 참조할 수 없음!!!
  static MAX_STUDENTS = 3;
  static dogyeom() {
    return new Likelion('도겸', 22);
  }
}

// hansol과 kihoon은 Likelion 이라는 클래스의 인스턴스(객체)이다.
const hansol = new Likelion('한솔', 20);
const kihoon = new Likelion('기훈', 2);

console.log(hansol);
console.log(hansol.name);
console.log(hansol.age);

console.log(kihoon);
console.log(kihoon.name);
console.log(kihoon.age);

// 함수 와 접근자 프로퍼티
console.log(hansol.greeting());
console.log(hansol.emoji);
// console.log(hansol.emoji()); // get을 사용하지 않았을 때 사용

console.log(kihoon.greeting());
console.log(kihoon.emoji);
// console.log(kihoon.emoji()); // get을 사용하지 않았을 때 사용

// 정적 프로퍼티
const dogyeom = Likelion.dogyeom();
console.log(dogyeom);
console.log(Likelion.MAX_STUDENTS);

// 상속 (extends)
// 상속을 받아 공통적인 것을 상속받고 새로운 함수를 추가할 수 있다.
class Hyemyung extends Likelion {
  constructor(name, age, skill) {
    super(name, age); // super : 상속 하고 있는 부모 클래스
    this.skill = skill;
  }

  // 오버라이딩(overriding) : 자식 클래스에서 부모 클래스의 함수를 덮어 씌움
  get emoji() {
    return `${this.name} 🐱`;
  }
}

const hyemyung = new Hyemyung('혜명', 11, 'JavaScript');
console.log(hyemyung);
console.log(hyemyung.emoji);
