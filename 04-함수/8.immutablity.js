// 함수 내부에서, 외부로부터 받아온 인자의 값을 변경하는 것은 정말 좋지 않다!
// 상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트 또는 값) 만들어서 반환해야 함
// 원시값 - 값에 의한 복사
// 겍체값 - 참조에 의한 복사(메모리 주소)

function display(num){
  //num = 5; 와 같이 변경하는 것은 결코 좋지 않다. 
  //특히 객체를 전달받았을 때 난리난다.
  console.log(num);
}

const value = 4;
display(value);



//// 객체값을 수정했을 때 난리나는 이유
function displayObj(obj){
  // obj.name = 'losnah' <= 이걸 해버리면 원본 값까지 변경되어 버림. 그리고 일단 뭘 보여준다는 함수명이랑 안맞아!! 애초에 글러먹었어
  console.log(obj);
}

const hansol = {name: 'hansol'};
displayObj(hansol);
console.log(hansol);


function changeName(obj){ // 정 이름을 바꾸고 싶다면 이런식으로 아예 함수를 따로 만들고 (이름부터 이름 변경하는 늬앙스)
  return {...obj, name: 'losnah'}; // 원본을 건드리지 않도록 객체를 따로 만들어준다.| 반환할 때는 새로운 오브젝트 만들기
}
