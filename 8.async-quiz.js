/* getChicken() //
  .catch(() => "chicken img")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
  을 async, await으로 바꾸기
  */

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

async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken(); //
  } catch {
    chicken = "chicken img";
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriedEgg().then(console.log);
