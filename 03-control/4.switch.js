// break 까먹지 않게 주의!!!
// 조건문 
// switch.  if 와는 성질이 조금 다르다
// 정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우
let day = 11; // 0:월, 1: 화...
let dayName;

// if (day === 0){
//   dayName = '월요일';
// } else if (day === 1){
//   dayName = '화요일';
// }else if (day === 2){
//   dayName = '수요일';
// }else if (day === 3){
//   dayName = '목요일';
// }else if (day === 4){
//   dayName = '금요일';
// }else if (day === 5){
//   dayName = '토요일';
// }else{
//   dayName = '일요일';
// }

console.log(dayName);

//위 코드를 swich로 보다 간단하게 할 수 있다.
switch (day){
  case 0:
    dayName = '월요일';
    break;

  case 1:
    dayName = '화요일';
    break;

  case 2:
    dayName = '수요일';
    break;

  case 3:
    dayName = '목요일';
    break;

  case 4:
    dayName = '금요일';
    break;

  case 5:
    dayName = '토요일';
    break;

  case 6:
    dayName = '일요일';
    break;    

  default:
    console.log('해당하는 요일 없음!!');
}
console.log(dayName);
// console.clear();

// let condition = 'good'; 
let condition = 'okay'; 
// let condition = 'bad'; 
let text;

switch(condition){
  // condition 이 good이거나 okay이면, text 변수에 좋음 할당
  case 'good':
  case 'okay':
    text = '좋음!';
    break;

  case 'bad':
    text = '나쁨!';
    break;  
}

console.log(text);
