import counterActionCreator from "@redux/counterActionCreator";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { countDown, countUp, countReset } from "@redux-toolkit/counterSlice";

function Right3() {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });

  // 상태값 수정
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Right3</h3>
      {/* <button
        onClick={() => {
          dispatch(counterActionCreator.countDown(1));
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch(counterActionCreator.countReset());
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          dispatch(counterActionCreator.countUp(2));
        }}
      >
        +2
      </button> */}

      {/* redux toolkit */}
      <button
        onClick={() => {
          dispatch(countDown(1));
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch(countReset());
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          dispatch(countUp(2));
        }}
      >
        +2
      </button>
    </div>
  );
}

export default Right3;
