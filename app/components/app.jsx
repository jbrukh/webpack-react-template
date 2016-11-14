import React from 'react'
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'

require('../styles/global.scss')

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
      </Router>
    );
  }
}

export default App
