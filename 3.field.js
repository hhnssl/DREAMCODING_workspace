
// 접근 제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit{
  /* 필드: name과 emoji는 생략 가능 */ 
  #name;
  #emoji;
  #type = '과일'; // 인스턴스를 만들 때 초기화가 되어야한다면, 생성자 밖에서 초기화가 가능하다.
  /* 필드 */ 

  constructor(name, emoji){
    this.#name = name;
    this.#emoji = emoji;
  }

  #display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}


const apple = new Fruit('apple', '사과이모지');
// apple.#name = '오렌지'; <- #field는 외부에서 접근이 불가능함

console.log(apple);

