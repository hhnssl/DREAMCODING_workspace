// 공통된 속성이 있다면 묶어서 상속시켜버린다!

// class Tiger {
//   constructor(color){
//     this.color = color;
//   }

//   eat(){
//     console.log('먹자!');
//   }

//   sleep(){
//     console.log('잔다.');
//   }
// }

// class Dog {
//   constructor(color){
//     this.color = color;
//   }

//   eat(){
//     console.log('먹자!');
//   }

//   sleep(){
//     console.log('잔다.');
//   }

//   play(){
//     console.log('놀자아~!');
//   }
// }


class Animal {
  constructor(color){
    this.color = color;
  }

  eat(){
    console.log('먹자!');
  }

  sleep(){
    console.log('잔다.');
  }
}

class Tiger extends Animal {}

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();


class Dog extends Animal{
  // 자식 클래스에 생성자를 추가로 넣고 싶다면, 원래 부모에게 있던 인자(color)를 무조건 넣어주어야한다. => super(color)
  constructor(color, ownerName){
    super(color); // super: 내가 상속하고 있는 부모 클래스를 가리킨다.
    this.ownerName = ownerName;

  }
  play(){
    console.log('놀자~!');
  }

  // 자식 클래스에서 부모 클래스에 있는 함수를 덮어씌운다: 오버라이딩 overriding
  // eat(){
  //   console.log('강아지가 먹는다.');
  // }

  eat(){
    // 부모의 기능을 그대로 유지하면서 '추가적인 것을' 하고 싶다면 super라는 키워드 사용!
    super.eat(); // 부모의 함수를 먼저 호출하고
    console.log('강아지가 먹는다.'); // 내가 추가하고 싶은 걸 추가하면 된다! 이거는 순서 바뀌어도 됨
  }
  
}
const dog = new Dog('빨강이', '한솔');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();