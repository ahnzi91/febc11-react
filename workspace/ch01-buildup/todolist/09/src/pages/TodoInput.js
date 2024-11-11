import DOMUtils from "../../../utils.js";

// 입력창 구성
function TodoInput({ handleAdd, handleAddKeyup }) {
  return ( 
    DOMUtils.createElement("div", { class: "todoinput" }, 
      DOMUtils.createElement("input", { type: "text", autofocus: "",onkeyup: (event) => handleAddKeyup(event) }),
      DOMUtils.createElement("button", { type: "button", onclick: handleAdd }, "추가")
    )
  );
}

export default TodoInput;