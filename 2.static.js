// static 정적 프로퍼티와 메서드
class Fruit{
  static MAX_FRUITS = 4;
  constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit(){
    // 클래스 레벨의 메서드에는 this를 참조할 수 없음 (클래스 자체는 아무것도 담지 않은 '템플릿' 그 자체이기 때문에)
    return new Fruit('banana', '바나나 이모지'); // 새로운 과일 오브젝트 만들어서 반환
  };

  // 이 display 함수는 만들어진 인스턴스와 밀접하게 연관되어 있으므로, 그대로 인스턴스 레벨로 두는 것이 좋다.
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

const apple = new Fruit('apple', '사과이모지');
const orange = new Fruit('orange', '오렌지이모지');

console.log(orange);
console.log(apple);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
