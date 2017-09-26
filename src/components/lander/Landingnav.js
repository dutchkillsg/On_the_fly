import React, { Component } from 'react';

import firebase from 'firebase';
import { login, resetPassword } from '../../helpers/auth';
import { Redirect } from 'react-router'
import {withRouter} from "react-router-dom";

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}




class Login extends Component {
  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })



  }


  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }

  render(){
    return (
      <nav id = 'menu'>
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="field first">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email"  ref={(email) => this.email = email} />
          </div>
          <div className="field ">
            <label htmlFor="email">password</label>
            <input type="password" name="password" id="password" ref={(pw) => this.pw = pw} />
          </div>

          <ul className="actions">
            {
            this.state.loginMessage &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
            </div>
          }
            <li><input type="submit" value="Submit" className="special" /></li>
            <li><input type="reset" value="Clear" /></li>
          </ul>
        </form>
      </nav>
    )
  }
}

export default withRouter(Login);
