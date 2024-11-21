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

  // 1-1
  constructor(props) {
    console.log("1-1 constructor 호출됨.");
    super(props);
    this.state = { count: props.level || 1 };
  }

  // 1-2/2-1
  static getDerivedStateFromProps(props, state) {
    console.log("1-2/2-1 getDerivedStateFromProps 호출됨.");

    return null;
  }

  // 2-2
  shouldComponentUpdate(nextProps, nextState) {
    console.log("2-2 shouldComponentUpdate 호출됨.");
  }

  // 1-3/2-3
  render() {
    console.log("1-3/2-3 render 호출됨.");
    return (
      <div>
        클릭 횟수 x {this.props.level || 1} : {this.state.count}
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }

  // 1-4
  componentDidMount() {
    console.log("1.4 componentDidMount 호출됨.");
  }

  // 2-4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("2-4 getSnapshotBeforeUpdate 호출됨.");

    return "hello";
  }

  // 2-5
  componentDidUpdate() {
    console.log("2-5 componentDidUpdate 호출됨.");
  }

  // 3-1
  componentWillUnmount() {
    console.log("3-1 componentWillUnmount 호출됨.");
  }
}

ClickMe.proptTypes = {
  level: PropTypes.number,
};

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
        <ClickMe level={2} />
        <ClickMe level={5} />
        <ClickMe level={1} />
      </div>
    );
  }
}

export default Parent;
