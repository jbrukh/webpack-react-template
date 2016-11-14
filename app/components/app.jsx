import React from 'react';
import {render} from 'react-dom';
import Counter from './counter';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world, {this.props.name}!</h1>
        <Counter />
      </div>
    );
  }
}

render(<App name="ReactJS" />, document.getElementById('app'));
