//JSON: JavaScript Object Notation: 자스에서 사용하는 객체를 서버와 주고 받기 편한 문자열 형태로 변환한 버전
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포멧
// JSON <-> 객체 변환 가능
// stringify(object): JSON <== 객체를 제이쓴 형태로 변환해주는 함수 (서버로 보내기 위해)
// parse(JSON): object <== 제이쓴을 객체 형태로 변환해주는 함수  (서버에서 받아서 써먹기 위해 )

const ellie = {
  name: "ellie",
  age: 20,
  eat: () => {
    console.log("eat");
  },
};

// 위의 ellie 객체를 JSON 형태로 변환해보기 (( 직렬화 Serializing: 객체를 문자열로 변환))
const json = JSON.stringify(ellie);
console.log(ellie); // 객체
console.log(json); // 객체를 JSON 형태로 변환 // 함수를 포함하지 않는다. 오직 데이터만 포함한다.(객체의 프로퍼티(상태))

// 다시 json을 객체로 바꾸기 ((역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환))
const obj = JSON.parse(json);
console.log(obj); // eat() 함수가 빠져있음 (애초에 변환하는 거에 안들어갔으니까)
