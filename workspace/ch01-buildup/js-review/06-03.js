function f1(callback) {
  console.log(`두 번째 노출. f1 작업 시작.`);
  console.log(`세 번째 노출. f1 작업중...`);

  setTimeout(() => {
    // ......
    console.log(`네 번째 노출. f1 작업 종료.`);
    callback(`f1의 결과물`);
  }, 1000);
}

function f2(f1Result, callback) {
  console.log(`다섯 번째 노출. ${f1Result}로 f2 작업 시작.`);
  console.log(`여섯 번째 노출. f2 작업중...`);

  setTimeout(() => {
    // ......
    console.log(`일곱 번째 노출. f2 작업 종료.`);
    callback(`여덟 번째 노출. 최종 결과물`);
  }, Math.random() * 2000);
}

function test() {
  f1((f1Result) => {
    f2(f1Result, (result) => {
      console.log("여덟 번째 노출.", result);
    });
  });

  // console.log(result);
}

console.log("첫 번째 노출. 테스트 시작.");
test();
console.log("아홉 번째 노출. 테스트 완료.");
