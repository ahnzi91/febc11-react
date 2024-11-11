import TodoItem from "./TodoItem";

function TodoList({ itemList, toggleDone, deleteItem }) {
  const list = itemList.map((item) => <TodoItem item={ item } key={ item._id } toggleDone={ toggleDone } deleteItem={ deleteItem } />);
  return (
    <ul className="todolist">
      { list }
    </ul>
  );
}

export default TodoList;