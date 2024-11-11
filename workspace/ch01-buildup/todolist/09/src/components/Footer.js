import DOMUtils from "../../../utils.js";

// 푸터 구성
function Footer() {
  return (
    DOMUtils.createElement("footer", null, 
      DOMUtils.createElement("p", null, "멋쟁이 사자처럼 FrontEnd BootCamp")
    )
  );
}

export default Footer;