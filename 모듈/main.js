// import { increase, getcount } from "./counter.js";
// import { increase, getcount, count } from "./counter.js"; /// 변수도 export 하면 가져오기 가능하지만 권장 ㄴㄴ

// increase();
// increase();
// increase();

// const count = getcount();
// console.log(count);

// 그룹화해서 사용하는 방법
import * as counter from "./counter.js"; // 모든 것들을 가져와  counter라는 이름으로 사용하겠다.

// 그룹화한 것 사용 방법: 점을 붙여야함
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getcount());
