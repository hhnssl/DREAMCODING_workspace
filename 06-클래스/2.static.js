// 클래스로 만든 객체, 즉 인스턴스들의 멤버(프로퍼티, 메소드)들을 인스턴스 레벨의 프로퍼티와 메소드라 부른다.
// 클래스 안에 있는 멤버에 static 키워드를 붙이면 클래스 레벨의 프로퍼티와 메소드가 된다.
// ㄴ 인스턴스에 포함되지 않고, 클래스에 그대로 남아 있게 된다 ===> 클래스에 딱 한번만 만들어져서 재사용할 수 있음
// 사용하는 법: 클래스명.프로퍼티 또는 클래스명.멤버

// static 정적 프로퍼티, 메서드
class Fruit {
  // static 프로퍼티: 클래스 레벨로 지정했기 때문에, **인스턴스 레벨에서 접근 불가능**
  static MAX_FRUIT = 4;

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스별로 공통적으로 사용가능하고,
  // 만들어진 인스턴스 데이터에 참조할 필요가 없다면 static으로 두어도 좋다.
  static makeRandomFruit() {
    // class 레벨의 메서드 == 클래스로 호출할 수 있는 메서드
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없다 <= 클래스 자체로는 아무것도 채워지지 않은 그저 **템플릿**이기 때문
    return new Fruit("banana", "바나나이모지");
  }

  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }
}

// Fruit.display(); // 인스턴스 레벨의 함수는 클래스명으로 호출할 수 없다.

const banana = Fruit.makeRandomFruit(); // 클래스로 직접적으로 호출해서 변수에 담음
console.log(banana);
banana.display();

console.log(Fruit.MAX_FRUIT);

// static 예시
Math.pow();
Number.isFinite(1);
