import PropTypes from "prop-types";
import "./Button.css";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

export default function Button({ type = "button", onClick, children, color }) {
  return (
    <button
      type={type}
      className="rounded-button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
}
