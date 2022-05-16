const obj = {
  name: '한솔', 
  age: 20,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨 
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 [대괄호 표기법]을 사용할 수 있다.
function getValue(obj, key){
  // return obj.key;<- 안된다.
  return obj[key];
}
console.log(getValue(obj, 'name'));


// 동적으로 추가하기
function addKey(obj, key, value){
  obj[key] = value;
}

addKey(obj, 'job', 'FE developer');
console.log(obj);



// 동적으로 삭제하기
function deleteKey(obj, key){
  delete obj[key];
}

addKey(obj, 'name');
console.log(obj);