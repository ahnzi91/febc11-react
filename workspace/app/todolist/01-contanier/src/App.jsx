import Footer from "@components/Footer";
import Header from "@components/Header";
import TodoContainer from "@pages/TodoContainer";

function App() {
  // JSX 문법으로 만들어지는 UI 리턴
  return (
    <div id="todo">
      <Header />
      <TodoContainer />
      <Footer />
    </div>
  );
}

export default App;
