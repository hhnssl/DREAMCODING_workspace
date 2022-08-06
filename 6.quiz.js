// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤, 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

// class Counter {
//   constructor(name) {
//     this.name = name;
//     this.number = 0;
//   }

//   add() {
//     this.number++;
//     console.log(this.number);
//   }
// }

// const counter = new Counter("oliveyoung");
// counter.add();
// counter.add();
// counter.add();

class Counter {
  #value;
  constructor(startValue) {
    // 입력한 값이 숫자가 아니거나 0 미만의 수라면, 무조건 0으로 초기화할 것
    // + 외부에서 값을 변경할 수 없게 private하게 # 추가
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    return this.#value; // 엘리쌤이 왜 값을 가져오는 건데, 함수호출하는 것처럼 쓰니까 이상하다고 한지 알 거 같다!!
  }

  increment() {
    // 외부로 노출돼서 유일하게 value값을 변화시킬 수 있음.
    this.#value++;
  }
}

const counter = new Counter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3
console.log(counter.value);
