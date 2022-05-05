// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참) ;
console.log(거짓);

//활용예:
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

// 위의 것들 없애버리기~(이전 로그 없애기)
console.clear();


// !! : 값을 true나 false로 변환할 수 있다.
// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);