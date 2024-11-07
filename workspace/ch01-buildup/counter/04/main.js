const obj = {
  // 지정한 속성과 자식 요소를 가지는 요소 노드를 생성해서 반환
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

  // root 노드 관리하는 객체를 생성해서 반환
  // createRoot(document.getElementById("root")).render(App);
  createRoot: (rootNode) => {
    return {
      // root 노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
      render(appFn) {
        rootNode.appendChild(appFn());
      },
    };
  },
};

export default obj;
