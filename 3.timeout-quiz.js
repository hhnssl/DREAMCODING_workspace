// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자

// function runInDelay(callback, seconds) {
//   try {
//     if (seconds < 0) {
//       throw error;
//     }

//     setInterval(callback, seconds * 1000);
//   } catch {
//     console.log("에러가 났네요");
//   }
// }

// runInDelay(() => {
//   console.log("우하하 성공성공");
// }, 3);

function runInDelay(callback, seconds) {
  if (!callback) {
    // 콜백함수가 인자에 없다면
    throw new Error("callback 함수를 전달해야 함");
  }

  if (!seconds || seconds < 0) {
    // seconds 인자가 없거나 || 0 보다 작다면
    throw new Error("seconds는 0 보다 커야 함"); // 에러 메세지는 최대한 구체적으로
  }

  setTimeout(callback, seconds * 1000);
}

// 두번째 인자가 0보다 작아서 런인딜레이 함수에서 에러를 던지는데, 어플이 멈추지 않게 하기 위해 예외처리 해줌
try {
  runInDelay(() => {
    console.log("gg");
  }, -3);
} catch (error) {}
