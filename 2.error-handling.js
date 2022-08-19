// try, catch, finally
function readFile(path) {
  //path에 해당하는 파일을 못해서 예상치 못한 에러가 발생한 경우 throw 사용. throw는 에러를 강제로 발생시킨다.
  // Error는 error에 대한 설명을 전달할 수 있다.
  throw new Error("파일 경로를 찾을 수 없음");
  return "파일의내용";
}

function processFile(path) {
  // 아래 세 줄을 예외 처리를 위해 try ,catch 문을 사용해 보기
  // const content = readFile(path); <- 사실상 이 부분만을 위해서 try, catch문 사용
  // const result = "hi" + content;
  // return result;

  let content;
  try {
    // 먼저 readFile()을 실행해서 content에 할당하는 시도(try)를 해볼거야
    content = readFile(path);
  } catch (error) {
    // 에러가 발생하면 catch가 잡을거야
    // catch에서는 에러에 대한 내용을 확인하거나
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack); //에러의 경로

    // 에러가 났을 때 어떻게 대체할지를 정할 수 있다.
    content = "기본 내용"; //파일을 읽지 못한 경우 기본 내용을 넣어 대체하겠다~
  } finally {
    console.log(
      " 성공하든 실패하든 마지막으로 리소스를 정리할 수 있다 finally 에서 !!"
    );
  }

  const result = "hi" + content;
  return result;
}

const result = processFile("경로");
console.log(result);
