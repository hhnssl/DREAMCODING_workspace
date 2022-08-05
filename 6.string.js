// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const textObj = new String("Hello world!");
const textRaw = "Hello world!";

console.log(textObj);
console.log(textRaw);

console.log(textRaw[0]);
console.log(textRaw[1]);

console.log(textRaw.charAt(0)); // 위와 같은 역할
console.log(textRaw.charAt(1));

console.log(textRaw.length);

console.log(textRaw.indexOf("l")); // l의 위치 반환
console.log(textRaw.lastIndexOf("l")); // l의 위치 반환. 단, 뒤에서부터 찾음

// 해당 문자를 포함하는지 검사
console.log(textRaw.includes("tx"));
console.log(textRaw.includes("he"));
console.log(textRaw.includes("He")); // 대소문자 구분함

// 해당 문자로 시작 또는 끝나는지 검사
console.log(textRaw.startsWith("Hel"));
console.log(textRaw.endsWith("!"));

// 대문자로 또는 소문자로 바꾸기
console.log(textRaw.toUpperCase());
console.log(textRaw.toLowerCase());

// 특장 위치 문자열을 가져오기
console.log(textRaw.substring(0, 2));

// 특정 위치에 있는 문자열 잘라오기
console.log(textRaw.slice(2));
console.log(textRaw.slice(-2)); // 뒤에서부터 두번째까지 잘라오기

// 공백 제거
const space = "            space     ";
console.log(space.trim());

//  알고리즘에서 많이 쓰임
// 스페이스별로 문자열 끊어서 배열로 반환
const longText = "Get to the Poing";
console.log(longText.split(" "));
console.log(longText.split(" ", 2)); // 끊은 것 중에 2개만 가져오기

const longText2 = "Get,to,the,Poing space";
console.log(longText2.split(","));
console.log(longText2.split(", "));
