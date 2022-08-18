// 접근 제어자: 한번 만들고 나면 외부에서 변경 불가능하게 만들고 싶을때 (캡슐화)
// private(# 키워드 붙여야함), public(기본), protected
class Fruit {
  // field
  #name; // constructor에서 주어진 데이터이기 때문에 생략가능
  #emoji; // 생략 가능
  type = "과일"; // 인스턴스 만들 때 초기화 되어야하면 이렇게 사용 가능

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  #display() {
    console.log(`${this.name}: ${this.emoji}`);
  }
}

const apple = new Fruit("apple", "apple emoji");
console.log(apple);
apple.display(); // 접근 불가
