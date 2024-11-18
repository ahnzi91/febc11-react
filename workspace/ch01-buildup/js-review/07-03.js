// Array.prototype.find(callback): 배열의 각 요소에 대해 콜백 함수를 실행
// callback(element, index)
// true를 반환하는 첫 번째 콜백 함수에 전달된 요소를 반환
// true를 반환하는 콜백 함수가 없을 경우 undefined를 반환

// 배열 요소 중 2와 3의 최소 공배수 구하기
var array = [6, 7, 8, 1, 4, 5, 2, 3, 9, 10];
// 음의 정수를 반환할 경우 a, b로 정렬
// 양의 정수를 반환할 경우 b, a로 정렬
// 0을 반환할 경우 고정
array.sort((a, b) => a - b);
console.log(array);

var result = array.find((number) => number % 2 === 0 && number % 3 === 0);

console.log(result);
