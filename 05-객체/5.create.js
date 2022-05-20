// const apple = {
//   name: 'apple',
//   display: function() {
//     // 객체 안에서, 자기 자신의 속성에 접근할 때는 항상 this를 사용한다.
//     console.log(`${this.name}: 사과 이모지`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function() {
//     // 객체 안에서, 자기 자신의 속성에 접근할 때는 항상 this를 사용한다.
//     console.log(`${this.name}: 오렌지 이모지`);
//   },
// };
// 위의 내용을 생성자 함수로 간단히 구현하기

// 생성자 함수(첫글자는 무조건 대문자로)
function Fruit(name, emoji){
  // this는 자기 자신을 가리킴. 새로만들어진 객체 자기 자신
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };

  return this; //생략 가능. 자동으로 자스엔진이 만들어줌.
}


const apple = new Fruit('apple', '사과이모지');
const orange = new Fruit('orange', '오렌지이모지');

console.log(orange);
console.log(apple);
console.log(apple.name);
console.log(apple.emoji);
apple.display();