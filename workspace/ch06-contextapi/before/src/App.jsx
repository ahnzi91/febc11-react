import { useEffect, useState } from "react";
import Left1 from "@components/Left1";
import Right1 from "@components/Right1";

function App() {
  // Left3에 전달
  const [count, setCount] = useState(0);

  // Right3에 전달
  const countUp = function (step) {
    setCount(count + step);
  };

  useEffect(() => {
    console.log("# App 렌더링.");
  });

  return (
    <>
      <h1>Context API - Prop Drilling 대신 Context API 사용</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          <Left1 count={count} />
          <Right1 onCountUp={countUp} />
        </div>
      </div>
    </>
  );
}

export default App;
