import useAxiosInstance from "@hooks/useAxiosInstance";
import useFetch from "@hooks/useFetch";
import TodoListItem from "@pages/TodoListItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
  // API 서버에서 목록 조회
  const { data } = useFetch({ url: "/todolist" });

  const axios = useAxiosInstance;

  // 삭제 작업
  const handleDelete = async (_id) => {
    try {
      await axios.delete(`/todolist/${_id}`);
      alert("할 일이 삭제되었습니다.");

      // TODO : 목록을 다시 조회
    } catch (err) {
      console.error(err);
      alert("할 일 삭제에 실패했습니다.");
    }
  };

  const itemList = data?.items.map((item) => (
    <TodoListItem key={item._id} item={item} handleDelete={handleDelete} />
  ));

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/add">추가</Link>
        <br />
        <form className="search">
          <input type="text" autoFocus />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">{itemList}</ul>
      </div>
    </div>
  );
};

export default TodoList;
