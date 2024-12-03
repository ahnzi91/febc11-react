import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.oneOf(["blue", "red", "black", "white"]), // 글자 색상
  bg: PropTypes.oneOf(["blue", "red", "yellow", "gray"]), // 배경 색상
  size: PropTypes.oneOf(["sm", "md", "lg"]), // 버튼 크기
  onClick: PropTypes.func,
};

export default function Button({ children, color = "black", bg = "gray", size = "md", ...rest }) {
  // Tailwind CSS 사용
  let bgColor = {
    gray: "bg-gray-400",
    blue: "bg-blue-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
  };

  let textColor = {
    black: "text-black",
    white: "text-white",
    blue: "text-blue-500",
    red: "text-red-500",
  };

  let btnSize = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };
  return (
    <button
      className={`${bgColor[bg]} ${textColor[color]} ${btnSize[size]} m-1 rounded-md`}
      {...rest}
    >
      {children}
    </button>
  );
}
