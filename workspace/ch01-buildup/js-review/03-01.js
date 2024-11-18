function func(data1, data2) {
  data1 += 10;
  data2[0] += 10;
  console.log("data1", data1);
  console.log("data2[0]", data2[0]);
}

var d1 = 80; // number -> 원시형 데이터타입
var d2 = [80]; // array(object) -> 참조형 데이터타입

console.log(typeof d1, typeof d2);

console.log("===== 함수 호출 이전 =====");
console.log(d1, d2[0]); // 80 80

console.log("===== 함수 호출 =====");
func(d1, d2); // 90 90

console.log("===== 함수 호출 이후 =====");
console.log(d1, d2[0]); // 80 90

// 왜 원시형 데이터타입은 값이 안변하고 참조형 데이터타입은 값이 변했을까?
