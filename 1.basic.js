// 객체를 손쉽게 만들 수 있는 템플릿 2가지
// 1. 생성자 함수(오래된 고전적인 방법)
// 2. 클래스

/* 05-객체/5.create.js의 생성자 함수 방법을 클래스로 바꾸기! */
class Fruit{
  // constructor(생성자): new 키워드로 객체를 생설할 때 호출되는 함수
  constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
  }

  // display (){} <- 이렇게 일반함수로 해도 되고, 화살표 함수로 아래처럼 작성 가능하다
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 '인스턴스'이다.
const apple = new Fruit('apple', '사과이모지');

// orange는 Fruit 클래스의 '인스턴스'이다.
const orange = new Fruit('orange', '오렌지이모지');

console.log(orange);
console.log(apple);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

//obj는 그냥 객체이고, 그 어떤 클래스의 인스턴스도 아니다!!!
const obj = {name: 'hansol'};