// 구조 분해 할당

var itemList = [
  { no: 1, todo: "두부", done: true },
  { no: 2, todo: "계란", done: false },
  { no: 3, todo: "라면", done: true },
];

console.log(itemList[0]);
console.log(itemList[1]);

var [first, second] = itemList;
console.log("first", first); // first, { no: 1, todo: "두부", done: true }
console.log("second", second); // second, { no: 2, todo: "계란", done: false }

// second의 no와 todo 가져오기
console.log(second.no, second.todo);
// second의 no, todo, done 구조분해할당으로 가져오기
var { no, todo, done } = second;
console.log("second 구조 분해 할당", no, todo, done); // second 구조 분해 할당 2 계란 false
