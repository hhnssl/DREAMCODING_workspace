/** 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z), _
 * 대소문자를 구분함
 * 추천: camelCase (likethis)
 * 한국어 x
 * 예약어 x
 * 숫자로 시작 x
 * 특수문자 x (단, _ 와 $ 두가지는 예외!)
 * 이모지 x
 * 여러 개의 변수를 1, 2, 3 같이 숫자로 구분하지 말것! -> 최대한 의미있게 구체적인 이름으로 작성할 것!!!
 */

let apple;
let redApple;

//나쁜 예제
let number = 20;

// 좋은 예제
let myAge = 20;


// 나쁜예제
let audio1;
let audio2;

//좋은 예제
let backgroundAudio;
let windAudio;

// 꿀팁! 위의 예제를 이런식으로 공통된 단어로 시작하면 더 편하다! 사용할 때 자동완성으로 바로 확인도 가능하고
let audioBackground;
let audioWind;
