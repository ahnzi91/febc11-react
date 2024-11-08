const DOMUtils = (() => {
  // 아래 두 변수를 사용하기 위해 DOMUtils 함수를 즉시 실행 함수로 변경함.
  // 변수명 앞에 "_"를 쓰는 이유는 DOMUtils 함수 내부에서만 쓰기 위함이다.
  let _root;
  let _stateValue;

  // 지정한 속성과 자식 요소를 가지는 요소 노드를 생성해서 반환
  const createElement = (tag, props, ...children) => {
    // 요소 노드 생성
    const element = document.createElement(tag);

    // 속성 추가
    if (props) {
      for (const attrName in props) {
        const value = props[attrName];
        if (attrName.startsWith("on")) {
          element.addEventListener(attrName.toLowerCase().substring(2), value);
        }
        element.setAttribute(attrName, value);
      }
    }

    // 자식 노드 추가
    for (let child of children) {
      if (typeof child === "string" || typeof child === "number") {
        child = document.createTextNode(child);
      } else if (typeof child === "function") {
        child = child();
      } else if (Array.isArray(child)) {
        child.forEach((c) => element.appendChild(c));
      }

      if (!Array.isArray(child)) element.appendChild(child);
    }

    return element;
  };

  // root 노드 관리하는 객체를 생성해서 반환
  // createRoot(document.getElementById("root")).render(App);
  const createRoot = (rootNode) => {
    let _appComponent;
    return (_root = {
      // root 노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
      render(appFn) {
        _appComponent = _appComponent || appFn;
        if (rootNode.firstChild) {
          rootNode.firstChild.remove();
        }
        rootNode.appendChild(_appComponent());
      },
    });
  };

  // 상태값 관리
  // let [count, setCount] = DOMUtils.useState(10);
  const useState = (initValue) => {
    // 최초에 한 번만 initValue 값으로 저장하고 useState가 다시 호출되면 initValue는 무시하고 저장된 값을 사용
    if (_stateValue === undefined) {
      // 최초 useState가 호출되었을 때 한 번만 실행
      _stateValue = initValue;
    }

    // setValue(11);
    function setValue(newValue) {
      const oldValue = _stateValue; // 10
      _stateValue = newValue; // 11

      console.log("상태가 변경되었나?", oldValue, newValue);

      // Object.is(arg1, arg2)
      // arg1와 arg2가 같은지 비교하는 함수
      // 두 값이 같은지 비교해서 같이 않을 경우에(상태가 변경된 경우) 리렌더링한다.
      if (!Object.is(oldValue, newValue)) {
        console.log("리렌더링");
        _root.render();
      }
    }

    return [_stateValue, setValue];
  };

  return {
    createElement,
    createRoot,
    useState,
  };
})();

export default DOMUtils;
