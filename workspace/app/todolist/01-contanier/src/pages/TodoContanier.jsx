import Todo from "@pages/Todo";
import { useState } from "react";
import { produce } from "immer";

function TodoContainer() {
  // 샘플 목록
  const sampleItemList = [
    { _id: 1, title: "두부", done: true },
    { _id: 2, title: "계란", done: false },
    { _id: 3, title: "라면", done: true },
  ];
  const [itemList, setItemList] = useState(sampleItemList);

  // 할 일 추가
  const addItem = (item) => {
    // 데이터 갱신 (상태 변경)
    const newItemList = [...itemList, item]; // 객체일 경우 새로운 객체로 만들어야 화면 갱신이 됨
    setItemList(newItemList); // setter를 이용해야 화면이 갱신된다.
  };

  // 할 일 완료/미완료 처리
  const toggleDone = (_id) => {
    // 데이터 갱신 (상태 변경)
    const newItemList = produce(itemList, (draft) => {
      const item = draft.find((item) => item._id === _id);
      item.done = !item.done;
    });

    setItemList(newItemList);

    console.log("예전 itemList 값", itemList);
    console.log("새로운 itemList 값", newItemList);
  };

  // 할 일 삭제
  const deleteItem = (_id) => {
    // 데이터 갱신 (상태 변경)
    const newItemList = itemList.filter((item) => item._id !== _id);
    setItemList(newItemList);
  };

  return (
    <Todo itemList={itemList} addItem={addItem} toggleDone={toggleDone} deleteItem={deleteItem} />
  );
}

export default TodoContainer;
