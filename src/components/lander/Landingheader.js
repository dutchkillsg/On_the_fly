import React from 'react'


export default (props) => {
  return (
    <header id="header" className="alt">
      <a href="index.html" className="logo"><strong>On</strong> <span>The Fly</span></a>
      <nav>
        {props.login}
      </nav>
    </header>
  )
}
