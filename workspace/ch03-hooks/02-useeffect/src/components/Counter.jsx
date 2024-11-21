import Button from "@components/Button";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = "0" }) {
  const initCount = Number(children);
  const [count, setCount] = useState(initCount);
  const [step, setStep] = useState(1);

  const handleDown = () => {
    setCount(count - step);
  };
  const handleUp = () => {
    setCount(count + step);
  };
  const handleReset = () => {
    setCount(initCount);
  };

  // 1초 후에 자동으로 값 한 번 증가
  // 시키고 싶었는데 무한 렌더링 발생
  // setTimeout(() => {
  //   handleUp();
  // }, 1000);

  // 마운트 된 후에 최초 한 번만 값 증가
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log(
  //     "dependencies에 빈배열을 지정하면 컴포넌트가 마운트된 후에 한 번만 호출됨(업데이트 후에는 호출되지 않음)"
  //   );
  // }, []);

  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log("dependencies에 빈배열을 지정하지 않으면 컴포넌트가 마운트된 후에 호출됨");
  // });

  useEffect(() => {
    setTimeout(() => {
      handleUp();
    }, 1000);
    console.log("dependencies에 값을 지정하면 지정한 값중 하나라도 수정되었을 경우 호출됨");
  }, [step]);

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      {/* 제어 컴포넌트는 value, onClick 사용 */}
      <input
        type="number"
        id="step"
        style={{ width: "40px" }}
        value={step}
        onChange={(event) => setStep(Number(event.target.value))}
      />

      <Button onClick={handleDown} color="red">
        -
      </Button>
      <Button onClick={handleReset}>{initCount}</Button>
      <Button onClick={handleUp} color="blue">
        +
      </Button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;
