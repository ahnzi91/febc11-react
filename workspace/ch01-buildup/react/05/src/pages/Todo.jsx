import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo({ itemList, addItem }) {
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={ addItem } />
            <TodoList itemList={ itemList } />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;