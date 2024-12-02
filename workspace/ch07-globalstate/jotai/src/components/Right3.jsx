import { useEffect } from "react";
import { useAtom, useSetAtom } from "jotai";
import { counterAtom } from "@jotai/atoms";

function Right3() {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });

  const setCount = useSetAtom(counterAtom);

  const countUp = function (step) {
    setCount((count) => count + step);
  };

  const countDown = function (step) {
    setCount((count) => count - step);
  };

  const reset = function () {
    setCount(0);
  };

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => countDown(1)}>-1</button>
      <button onClick={() => reset()}>0</button>
      <button onClick={() => countUp(2)}>+2</button>
    </div>
  );
}

export default Right3;
