const obj = {
  // 지정한 속성과 자식 요소를 가지는 요소 노드를 생성해서 반환

  // <button type="button" onclick="handleUp()">+</button>
  // createElement("button", { type: "button", onclick: "handleUp()" }, "+")
  createElement: (tag, props, ...children) => {
    // 요소 노드 생성
    const element = document.createElement(tag);

    // 속성 추가
    if (props) {
      for (const attrName in props) {
        element.setAttribute(attrName, props[attrName]);
      }
    }

    // 자식 노드 추가
    for (let child of children) {
      if (typeof child === "string" || typeof child === "number") {
        child = document.createTextNode(child);
      }
      element.appendChild(child);
    }

    return element;
  },
};

export default obj;
