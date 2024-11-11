import DOMUtils from "../../../utils.js";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";

// 할일 구성
// props에 { itemList }가 들어간다.
function Todo(props) {
  return (
    DOMUtils.createElement("div", { id: "main" },
      DOMUtils.createElement("div", { id: "container" },
        DOMUtils.createElement("ul", null,
          DOMUtils.createElement("li", null,
            DOMUtils.createElement("h2", null, "쇼핑 목록"),
            TodoInput({ handleAdd: props.handleAdd, handleAddKeyup: props.handleAddKeyup }),
            TodoList({ itemList: props.itemList, toggleDone: props.toggleDone, deleteItem: props.deleteItem })
          )
        )
      )
    )
  );
}

export default Todo;