// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 <= 오래된 고전적인 방법
// 2. 클래스 <= 최신!! 현업에서 자주 쓰임

class Fruit {
  // constructor: 생성자 - new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스의 멤버 함수. function 키워드를 쓰지 않는다.
  // display () {} 이것도 가능
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit("사과", "사과이모지"); // Fruit 클래스의 인스턴스
const orange = new Fruit("오렌지", "오렌지이모지"); // Frut 클래스의 인스턴스
// 인스턴스와 객체의 차이
// 객체가 더 큰 개념
// 인스턴스는 클래스로 찍어낸 객체를 뜻하는 것

console.log(apple);
console.log(apple.name);

apple.display();
orange.display();
