// Bubbling up, Propagating

// 실행 순서: try문에서 c() -> b() -> a()
// 에러는 a에서 발생해서 a -> b-> c로 전파되어 catch 된다. ==> 최종호출자인 c 가 에러를 캐치한다.
// ㄴ 근접한 b에서 캐치하고 싶다면, b에서 try, catch문을 사용하면 됨.
function a() {
  throw new Error("error!!!");
}

function b() {
  // 첫번째 경우. 그냥 기본
  // a();

  // 두 번쩨 경우. 에러를 a와 가장 가까운 데서 잡을 경우
  // 대신, 에러를 c까지 보내지 않았으므로 "catced!!"는 출력되지 않음
  // try {
  //   a();
  // } catch (error) {
  //   console.log(error);
  // }

  // 세번째 경우. 에러를 잡되, 여기서 핸들링할 수 없을 때
  // ㄴ 다시 에러를 throw로 던진다. 버블링 업업해서 최종호출자가 에러처리함
  try {
    a();
  } catch (error) {
    console.log("생각해보니 이 에러는 내가 핸들링 할 수 없을 것 같군..!");
    throw error;
    // catced!! 까지 출력됨
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log("Catched!!");
}

console.log("done!!");
