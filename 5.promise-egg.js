// fetch: 네트워크 통신을 통해 데이터를 가져오는 것
function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => EGG`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => FRIED EGG!`);
}

function getChicken() {
  // return Promise.resolve(`garden => chicken`);
  return Promise.reject(new Error("치킨을 가지고 올 수 없음"));
}

// getChicken() //
//   .catch((error) => {
//     console.log(error.name);
//     return "chicken img";
//   })
//   .then((chicken) => {
//     return fetchEgg(chicken);
//   })
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg));

// 위의 코드에서 생략 가능한 것드를 정리해 최대한 심플하게 만들기!!
getChicken() //
  .catch(() => "chicken img")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
