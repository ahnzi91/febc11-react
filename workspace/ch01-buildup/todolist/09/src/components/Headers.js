import DOMUtils from "../../../utils.js";

// 헤더 구성
function Header() {
  return ( 
    DOMUtils.createElement("header", null,
      DOMUtils.createElement("h1", null, "Todo List - 컴포넌트 모듈화"),
      DOMUtils.createElement("p", null, "파일 경로: ",
        DOMUtils.createElement("span", { id: "filepath" },`ch${document.URL.split("/ch")[1]}index.html`)
      )
    )
  );
}

export default Header;