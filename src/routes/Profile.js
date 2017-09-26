import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Redirect } from 'react-router'
import {withRouter} from "react-router-dom";
import { logout } from '../helpers/auth';


class Profile extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    logout()

  }

  render(){
    return(
      <div id="outer-container">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} >
          <main id="page-wrap">
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <button className='btn btn-success' onClick={this.handleSubmit}>logout</button>
          </main>
        </Menu>
      </div>

    )
  }


}


export default withRouter(Profile);
