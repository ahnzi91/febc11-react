import { useState } from "react";
import PropTypes from "prop-types";

function ClickMe(props) {
  const [count, setCount] = useState(props.level || 1);

  const handleClick = () => {
    setCount(count + (props.level || 1));
  };

  return (
    <div>
      클릭 횟수 x {props.level || 1}: {count}
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

ClickMe.proptTypes = {
  level: PropTypes.number,
};

function Parent(props) {
  return (
    <div>
      <h1>02 클래스 컴포넌트 - 함수 컴포넌트와 같이 사용</h1>
      <ClickMe level={2} />
      <ClickMe level={5} />
      <ClickMe level={1} />
    </div>
  );
}

export default Parent;
