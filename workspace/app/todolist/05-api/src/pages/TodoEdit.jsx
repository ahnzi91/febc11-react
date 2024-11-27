import useAxios from "@hooks/useAxios";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

const TodoEdit = () => {
  // Outlet 컴포넌트의 context 값 추출
  const { item } = useOutletContext();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValue: {
      title: item.title,
      content: item.content,
      done: item.done,
    },
  });

  const axios = useAxiosInstance();

  // 수정 작업
  const onSubmit = (formData) => {
    try {
      axios.patch(`/todolist/${item._id}`, formData);
      alert("할 일이 수정되었습니다.");
    } catch (err) {
      console.error(err);
      alert("할 일 수정에 실패했습니다.");
    }
  };

  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">제목 :</label>
          <input
            type="text"
            id="title"
            autoFocus
            {...register("title", {
              required: "제목을 입력하세요.",
            })}
          />
          <div className="input-error">{errors.title?.message}</div>

          <br />

          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols="23"
            rows="5"
            {...register("content", {
              required: "내용을 입력하세요.",
            })}
          />
          <div className="input-error">{errors.content?.message}</div>

          <br />

          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" {...register("done")} />

          <br />

          <button type="submit">수정</button>
          <Link to={`/list/${item._id}`}>취소</Link>
        </form>
      </div>
    </>
  );
};

export default TodoEdit;
