import "./Button.css";

export default function Button({ type = "button", onclick, children, color }) {
  return (
    <button
      type={type}
      className="rounded-button"
      onClick={onclick}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
}
