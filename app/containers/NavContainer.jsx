import React from 'react'
import Nav from '../components/Nav'

const NavContainer = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

export default NavContainer
