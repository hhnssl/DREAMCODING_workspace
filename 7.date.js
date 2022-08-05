// UTC 기준(협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date("Jun 5, 2022")); // 날짜 지정
console.log(new Date("2022-12-17T03:24:00")); // 날짜 지정

console.log(Date.now());
console.log(Date.parse("2022-12-17T03:24:00"));

const now = new Date(); // 현재 시간
now.setFullYear(2023); // 연도 설정
now.setMonth(10); //0부터 1월 시작
console.log(now.getFullYear());
console.log(now.getDate()); // 0부터 시작
console.log(now.getDay()); // 0(일요일)부터 시작
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleString("en-US")); // 미국시간
console.log(now.toLocaleString("ko-KR")); // 한국 시간
