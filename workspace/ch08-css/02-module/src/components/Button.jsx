import PropTypes from "prop-types";
import "./Button.css";
Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.oneOf(["blue", "red", "yellow", "gray"]), // 글자 색상
  bg: PropTypes.oneOf(["blue", "red", "yellow", "gray"]), // 배경 색상
  onClick: PropTypes.func,
};

export default function Button({ children, type = "button", color, bg, onClick: clickHandler }) {
  return (
    <button className={`button color-${bg}-${color}`} type={type} onClick={clickHandler}>
      {children}
    </button>
  );
}
