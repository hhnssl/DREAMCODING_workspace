// asynce, await <== 프로미스의 then 지옥 방지

function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

// 바나나와 사과를 같이 가지고 오기
// 사용방법: 비동기로 동작하길 원하는 함수 앞에 async 키워드 붙이기
async function fetchFruits() {
  // 1. 바나나를 받는다
  const banana = await getBanana(); // await: getBanana()로 바나나를 받을 때 까지 기다렸다가 받아오면 banana에 할당한다..
  const apple = await getApple();

  return [banana, apple]; // 프로미스가 리턴된다.
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
