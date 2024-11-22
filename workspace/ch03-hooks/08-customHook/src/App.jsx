import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const API_SERVER = "https://todo-api.fesp.shop/api";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Todo API 서버에 ajax 요청을 보낸다.
  const fetchTodo = async (fetchParams) => {
    try {
      setIsLoading(true);
      const res = await fetch(API_SERVER + fetchParams.url);
      const jsonData = await res.json();

      if (jsonData.ok) {
        setData(jsonData.items);
        setError(null);
      } else {
        throw new Error(jsonData.error.message);
      }
    } catch (err) {
      // 에러 처리
      console.error(err);
      setError({
        message: "일시적인 문제로 인해 작업 처리에 실패했습니다. 잠시 후 다시 요청해주세요.",
      });
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  // 리턴 된 다음에 호출되는 React Hook
  // API 호출 코드는 항상 useEffect 안에서 이루어 진다.
  useEffect(() => {
    const fetchParams = { url: "/todolist?delay=3000" };
    fetchTodo(fetchParams);
  }, []);
  return (
    <>
      <h1>08 Custom Hook - 커스텀 훅 없이 fetch API 사용</h1>
      <h2>할일 목록</h2>
      {isLoading && <PacmanLoader color="#43c532" speedMultiplier={2} />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item._id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
