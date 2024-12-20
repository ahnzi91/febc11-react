import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo(props) {
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={props.addItem} />
            {/* <TodoList itemList={ itemList } toggleDone={ toggleDone } deleteItem={ deleteItem }/> */}
            <TodoList {...props} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;
