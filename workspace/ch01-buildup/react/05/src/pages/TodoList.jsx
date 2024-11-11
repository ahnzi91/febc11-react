import TodoItem from "./TodoItem";

function TodoList({ itemList }) {
  const list = itemList.map((item) => <TodoItem item={ item } key={ item._id } />);
  return (
    <ul className="todolist">
      { list }
    </ul>
  );
}

export default TodoList;