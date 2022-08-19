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
// getBanana() //
//   .then((banana) => {
//     getApple() //
//       .then((apple) => {
//         return [banana, apple];
//       });
//   });

// 생략 버전
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

// 위 코드에서 바나나와 사과를 동시에 가져오려 하니까
// 1초 + 3초가 되어버림
// 이걸 병렬 처리로 바꾸려면
// Promise.all : 병렬적으로 한번에 모든 프로미스들을 실행 => 3초가 걸림
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits));

// 메소드체이닝은 4초
// 병렬처리방식은 3초

//Promise.race: 주어진 프로미스 중에 제일 빨리 수행되는 것이 이김 ==> 1초짜리인 바나나만 출력함
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log("race", fruit));

// 에러를 가져오는 경우
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);

// 에러발생된거랑 성공한거랑 정보를 가져오고 싶을때 사용
// 실패하든 성공하든, 그 결과를 배열로 묶어서 보여준다.
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-settle", fruits))
  .catch(console.log);
