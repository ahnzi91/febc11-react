import { Component } from "react";
import PropTypes from "prop-types";

class ClickMe extends Component {
  // state/setState는 부모에(Component) 정의되어 있는 이름
  // 상태는 state 변수 하나만 사용 가능해서 여러 개의 상태를 관리하려면 객체로 지정해야한다.
  // 함수형에서는 state 변
  state = { count: 0 };

  handleClick = () => {
    this.setState({ count: this.state.count + (this.props.level || 1) });
  };

  render() {
    return (
      <div>
        클릭 횟수 x {this.props.level || 1} : {this.state.count}
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }
}

ClickMe.proptTypes = {
  level: PropTypes.number,
};

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>01 클래스 컴포넌트</h1>
        <ClickMe level={2} />
        <ClickMe level={5} />
        <ClickMe level={1} />
      </div>
    );
  }
}

export default Parent;
