import React from 'react'
import Router from 'react-router'
import Counter from './Counter'

require('../styles/global.scss')

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the homepage.</h1>
        <Counter />
      </div>
    );
  }
}

export default App
