import React from 'react'
import {Router, IndexLink, RouteHandler} from 'react-router'


const Nav = () => (
  <div>
    <IndexLink activeClassName="active-link" to="/">Home</IndexLink>
    <IndexLink activeClassName="active-link" to="/about">About</IndexLink>
  </div>
)

export default Nav
