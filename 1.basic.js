function add(a, b){
  // const: 바꿀 일이 없으니까 상수로
  // const result = a + b;
  // return result;
  console.log('function');
  return a + b;
}

const result = add(1, 2);
console.log(result);


//사용예제2
// let lastName = '김';
// let firstName = '지수';
// let fullName = `${lastName}${firstName}`;
// console.log(fullName);

// let lastName2 = '박';
// let firstName2 = '대박';
// let fullName2 = `${lastName2}${firstName2}`;
// console.log(fullName2);

// 위의 내용을 함수로 만들기

function fullName(lastName, firstName){
  return `${lastName}${firstName}야 반가워`;
}
console.log(fullName('박', '철수'));
