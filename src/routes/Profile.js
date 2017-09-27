import React, { Component } from 'react';
import { Landingheader } from '../components/lander'
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
      <div>
        <Landingheader
          login = {<a onClick={this.handleSubmit} className="logo">Logout</a>}
          />
        <div id="outer-container">
          <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} >
            <main id="page-wrap">


            </main>
          </Menu>
        </div>
      </div>

    )
  }


}


export default withRouter(Profile);
