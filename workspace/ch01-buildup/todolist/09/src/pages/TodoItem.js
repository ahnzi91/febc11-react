import DOMUtils from "../../../utils.js";

// 할일 아이템 하나 구성
function TodoItem({ item, toggleDone, deleteItem }) {
  return ( 
    DOMUtils.createElement("li", { "data-no": item.no },
      DOMUtils.createElement("span", null, item.no),
        DOMUtils.createElement("span", { 
          onclick: () => toggleDone(item.no) 
        },
        item.done ? DOMUtils.createElement("s", null, item.title) : item.title
        ),
        DOMUtils.createElement("button", { onclick: () => deleteItem(item.no) }, "삭제"
      )
    )
  );
}

export default TodoItem;