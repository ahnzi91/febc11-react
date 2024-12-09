import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function App() {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsInR5cGUiOiJ1c2VyIiwibmFtZSI6IuyaqeyMpCIsImVtYWlsIjoidTFAZ21haWwuY29tIiwiaW1hZ2UiOiIvZmlsZXMvMDAtbmlrZS91c2VyLWpheWcud2VicCIsImxvZ2luVHlwZSI6ImVtYWlsIiwiaWF0IjoxNzMzNDcxNTczLCJleHAiOjE3MzM1NTc5NzMsImlzcyI6IkZFU1AifQ.nTa3DsDZXtVu5lqhFi9eVGN3zJpyVdIP1RAx_r1IKvU";
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    console.log("로그인해보자.");
  }, []);

  // 2. submit 이벤트 등록
  const onSubmit = async (data) => {
    try {
      // 3. API 서버 호출
      const response = await axios.post(
        "https://11.fesp.shop/users/login",
        { email: data.email, password: data.password },
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            "client-id": "00-nike",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // 4. 로그인 성공 메세지 출력
      const { name } = response.data.item;
      alert(`환영합니다 ${name}님!`);
    } catch (error) {
      // 5. 로그인 실패 메세지 출력
      if (error.response) {
        alert(error.response.data.message);
        setError("API 에러 발생", { message: error.response.data.message });
      } else {
        alert("에러가 발생했습니다.");
        setError("API 에러 발생", { message: "네트워크 오류가 발생했습니다." });
      }
    }
  };

  return (
    // 1. JSX 작성
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "100vh",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 style={{ textAlign: "center" }}>로그인</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="email" style={{ marginBottom: "5px" }}>
              이메일
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "이메일은 필수 입력 항목입니다." })}
              style={{
                marginBottom: "15px",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
            {errors.email && <p style={{ color: "red", padding: 0 }}>{errors.email.message}</p>}
            <label htmlFor="password" style={{ marginBottom: "5px" }}>
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "비밀번호는 필수 입력 항목입니다." })}
              style={{
                marginBottom: "15px",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
            <button
              style={{
                padding: "7px",
                backgroundColor: "yellowgreen",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default App;
