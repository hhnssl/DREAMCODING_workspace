// html에서 main.js와 counter.js를 둘 다 사용하기 때문에, counter.js의 count에 접근할 수 있는 것.
// 이런식으로 다른 파일에서 값을 변경할 수 있다는 것은 버그에 취약함을 의미함
// 이걸 방지하기 위해 각각 파일별로 모듈화를 하는 것.
console.log(count);
increase();
console.log(count);
