// 지정한 수가 소수인지 여부를 반환
var isPrime = function (num) {
  console.time("소요 시간");
  console.log("소수 판별 시작.", num);

  // TODO: 소수 판별 코드
  let prime = num > 1; // 1은 소수가 아님

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      // 소수가 아님
      prime = false;
      break;
    }
  }

  console.log("소수 판별 결과.", prime);
  console.timeEnd("소요 시간");
  return prime;
};

// var isPrime = function (num) {
// 캐시를 위한 코드
//   isPrime._cache = isPrime._cache || {};
//   if (isPrime._cache[num] !== undefined) {
// 캐시 되어있음 (cache hit)
//     return isPrime._cache[num];
//   } else {
// 소수 판별 코드
//     return (isPrime._cache[num] = isPrime2(num));
//   }
// };

function memo(fn) {
  return function () {
    isPrime._cache = isPrime._cache || {};
    if (isPrime._cache[num] !== undefined) {
      // 캐시 되어있음 (cache hit)
      return isPrime._cache[num];
    } else {
      // 소수 판별 코드
      return (isPrime._cache[num] = isPrime2(num));
    }
  };
}

var isPrime = memo(isPrime); // memoization 기능 추가

isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(8);
isPrime(9);
isPrime(1000000007);
isPrime(1000000007);
isPrime(1000000007);
