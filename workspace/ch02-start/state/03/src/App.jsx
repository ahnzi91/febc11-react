import { useState } from "react";

function App() {
  const [position, setPositon] = useState({ x: 100, y: 250 });
  return (
    <>
      <h3>03 상태관리 대상이 객체일 경우 주의 사항</h3>
      <div
        onPointerMove={(event) => {
          // 속성을 직접 수정하더라도 리렌더링 되지 않음
          position.x = event.clientX;
          position.y = event.clientY;

          const newPosition = { x: event.clientX, y: event.clientY - 70 };

          setPositon(newPosition);

          console.log(position);
        }}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </>
  );
}

export default App;
