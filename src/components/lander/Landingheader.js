import React from 'react'
import { logout } from '../../helpers/auth';

export default (props) => {
  return (
    <header id="header" className="alt">
      <a href="index.html" className="logo"><strong>On</strong> <span>The Fly</span></a>
      <nav>
        <a href={props.menu}className="logo">{props.loginout}</a>
      </nav>
    </header>
  )
}
