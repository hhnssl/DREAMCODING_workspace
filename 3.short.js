const x = 0;
const y = 0;
const coordinate = {x, y}; //{x: x, y: y}
// const coordinate = {x: x, y: y}; 키와 참조값의 이름이 똑같다면 위처럼 생략이 가능하다
console.log(coordinate);

function makeObj(name, age){
  return {
    name: name, //name,
    age: age, //age와 같이 역시 생략 가능하다!
  };
}