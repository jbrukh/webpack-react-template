import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
    return <h1>Hello world, {this.props.name}!</h1>;
  }
}

render(<App name="ReactJS" />, document.getElementById('app'));
