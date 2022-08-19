// promise는 콜백함수를 전달 받지 않는다.
function runInDelay(seconds) {
  // 1. runInDelay함수가 성공적으로 수행되면 프로미스를 반환한다. ==> 굳이 try, catch로 성공했는지 실패했는지 사용할 필요가 없다.
  return new Promise((resolve, reject) => {
    // resolve: then을 호출할 때 사용할 인자
    if (!seconds || seconds < 0) {
      reject(new Error("seconds가 0 보다 작음"));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(3)
  .then(() => {
    // 2-1. (성공) 성공적으로 수행됐으니 then으로 필요한 일을 수행하면 된다.
    console.log("타이머 완료!!");
  })
  .catch(console.error) // 2-2. (실패) error가 발생하면 여기서 에러를 처리한다.
  .finally(() => console.log("끝났다!!")); //3. 성공하든 실패하든 최종적으로 실행한다.
