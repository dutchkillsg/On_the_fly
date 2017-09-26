import React, { Component } from 'react';
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
      <header id="header" className="alt">
        <a href="index.html" className="logo"><strong>On</strong> <span>The Fly</span></a>

            <button className='btn btn-success' onClick={this.handleSubmit}>logout</button>

      </header>


    )
  }


}


export default withRouter(Profile);
