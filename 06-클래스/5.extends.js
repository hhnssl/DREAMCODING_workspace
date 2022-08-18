// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }

//   eat() {
//     console.log("먹자!!");
//   }

//   sleep() {
//     console.log("잔다..");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }

//   eat() {
//     console.log("먹자!!");
//   }

//   sleep() {
//     console.log("잔다..");
//   }

//   play() {
//     console.log("놀자!!");
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log("먹자!!");
  }

  sleep() {
    console.log("잔다..");
  }
}

// Animal 상속하기
class Tiger extends Animal {}

const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.sleep();
tiger.eat();

// Animal을 상속하면서 메서드 추가하기
class Dog extends Animal {
  // 자식 클래스에서도 생성자함수를 설정할 수 있음
  // 대신!! 부모의 생성자함수로 받아온 것을 동일하게 추가해야함
  constructor(color, ownerName) {
    super(color); // 부모 생성자함수에 color 전달 // super === 부모클래스.
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀자아아아악");
  }

  // // 부모클래스에 있던 함수를 내가 정의한 함수로 덮어쓰기(오버라이딩)
  // eat() {
  //   console.log("강쥐기ㅏ 먹는다");
  // }

  // 부모의 기능을 그대로 유지하면서 추가적인 거 하고 싶을 때
  eat() {
    super.eat(); // 부모의 eat 함수를 먼저 호출하고 나서~
    console.log("강쥐가 먹는다."); // 내가 정의한 함수 호출~~
  }
}

const dog = new Dog("빨강이", "한솔");
console.log(dog);
dog.sleep();
dog.play(); // 상속받지 않고 추가한 함수 호출
dog.eat();
