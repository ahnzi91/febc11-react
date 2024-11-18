// Array.prototype.reduce(callback[], initialValue]): 배열의 각 요소에 대해 콜백 함수를 실행
// callback(accumulator, currentValue, index, array);
// accumulator: 누적값
// currentValue : 현재값
// index : 인덱스
// array : 원본 배열
// initialValue가 주어지면 누적값의 초기값으로 사용되고
// initialValue가 주어지지 않으면 배열의 첫 번째 요소가 누적값의 초기값으로 사용되고 두 번째 요소부터 콜백 함수가 호출된다.

// 배열 요소 중 홀수의 합계 구하기
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = array.reduce((sum, number) => {
  if (number % 2 !== 0) {
    return (sum += number); // 홀수 일 떄 number을 누적
  } else {
    return sum; // 짝수 일 때 이전 sum을 그대로 반환
  }
}, 0);

// 조금 더 간단하게
var result = array.reduce((sum, number) => {
  return num % 2 ? sum + num : sum; // 홀수 일 때 누적한다.
}, 0);

// 조금 더 더 간단하게
var result = array.reduce((sum, number) => (num % 2 ? sum + num : sum));

// 조금 더 더 더 간단하게
var result = array.reduce((sum, number) => (sum += num % 2 && num));

console.log(result);
