import React, { Component } from 'react'


export default (props) => {
  return (
    <nav id = 'menu'>
      <ul className="links">
        <li><a href="index.html">Link1</a></li>
        <li><a href="landing.html">Link2</a></li>
        <li><a href="generic.html">Link3</a></li>
        <li><a href="elements.html">Link4</a></li>
      </ul>
      <ul className="actions vertical">
        <li><a href="#" className="button special fit">Get Started</a></li>
        <li><a href="#" className="button fit">Log In</a></li>
      </ul>
    </nav>
  )
}
