// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기
// 예외처리+ 현재 숫자 조회!!!
class Counter{
  constructor(count){
    this.count = count;
  }

  plus(){
    this.count++;
    console.log(`현재 숫자: ${this.count}`);
  }
}

const counter = new Counter(-10);
counter.plus();
counter.plus();
counter.plus();
counter.plus();
counter.plus();