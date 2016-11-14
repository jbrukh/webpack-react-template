import React from 'react';

require('./Counter.scss');

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="counter">
        <div>Count: {this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
