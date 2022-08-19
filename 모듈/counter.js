let count = 0;
//외부로 노출시키고 싶으면 export default 키워드를 넣어주면 된다.
// export default는 모듈에서 딱 하나만 내보낼 수 있다.
// 여러가지를 export 하고 싶으면 default 키워드를 빼야 함 <- 이런 경우에 다른 파일에서 사용하려면 중괄호 안에 똑같은 함수 이름으로 넣어줘야함
// ㄴ ex) import {increase2 } from './counter.js';
// 이름 바꾸고 싶으면 increase2 as 원하는이름
export default function increase() {
  count++;
  console.log(count);
}

export function increase2() {
  count++;
  console.log(count);
}
