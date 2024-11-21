import { Component } from "react";
import ChildComponent from "./LifeCycle";

class App extends Component {
  render() {
    return (
      <div>
        <ChildComponent />
      </div>
    );
  }
}

export default App;
