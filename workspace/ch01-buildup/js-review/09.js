// strings 배열 사이에 <strong> 태그를 씌운 values 값을 채워 넣어서 하나의 문자열로 반환한다.
function sayHello(strings, ...values) {
  const strongPoint = strings.map((string, index) => {
    const value = values[index] !== undefined ? `<strong>${values[index]}</strong>` : "";
    return string + value;
  });
  return strongPoint.join("");
}

// => 안녕하세요. <strong>무지</strong>님. 오늘 날씨는 <strong>맑음</strong> 입니다.
// sayHello("안녕하세요. 무지님. 오늘 날씨는 맑음 입니다.");
// sayHello(평문 문자 배열, 강조 문자 배열)
const result = sayHello(["안녕하세요. ", "님. 오늘 날씨는 ", " 입니다."], "무지", "맑음");
console.log(result);

// => 안녕하세요. <strong>데이지</strong>님. 오늘 날씨는 <strong>흐림</strong> 입니다. 즐거운 <strong>하루</strong> 보내세요.
const result2 = sayHello(
  ["안녕하세요. ", "님. 오늘 날씨는 ", " 입니다. 즐거운 ", " 보내세요."],
  "데이지",
  "흐림",
  "하루"
);
console.log(result2);

const userName = "무지";
const weather = "맑음";
const str = `안녕하세요. ${userName}님. 오늘 날씨는 ${weather} 입니다.`;
const result3 = sayHello;
