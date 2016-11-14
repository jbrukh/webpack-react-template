import React from 'react'
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'
import NavContainer from '../containers/NavContainer'

require('../styles/global.scss')

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={NavContainer}>
          <IndexRoute component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}

export default App
