import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.css";

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.oneOf(["blue", "red", "yellow", "gray"]), // 글자 색상
  bg: PropTypes.oneOf(["blue", "red", "yellow", "gray"]), // 배경 색상
  onClick: PropTypes.func,
};

export default function Button({ children, type = "button", color, bg, onClick: clickHandler }) {
  // const colorStyle = `${styles.button} ${styles[`color-${bg}-${color}`]}`;
  const colorStyle = classNames(styles.button, styles[`color-${bg}-${color}`]);
  return (
    <button className={colorStyle} type={type} onClick={clickHandler}>
      {children}
    </button>
  );
}
