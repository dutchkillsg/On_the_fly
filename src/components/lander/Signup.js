import React, { Component } from 'react';
import firebase from 'firebase';
import { auth } from '../../helpers/auth';
import { Redirect } from 'react-router'
import {withRouter} from "react-router-dom";



function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

class Signup extends Component {
  state = { registerError: null }

  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
    .catch(e => this.setState(setErrorMsg(e),))
  }


  render() {
  return (
      <div id="signup" className="inner">

        <section>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="field first">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" ref={(email) => this.email = email} />
            </div>
            <div className="field">
              <label htmlFor="email">password</label>
              <input type="password" name="password" id="password" ref={(pw) => this.pw = pw} />
            </div>

            <ul className="actions">
              {
                this.state.registerError &&
                <div className="alert alert-danger" role="alert">
                  <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                  <span className="sr-only">Error:</span>
                  &nbsp;{this.state.registerError}
                </div>
              }
              <li><input type="submit" value="Submit" className="special" /></li>
              <li><input type="reset" value="Clear" /></li>
            </ul>
          </form>
        </section>
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="#">information@untitled.tld</a>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>Phone</h3>
              <span>(000) 000-0000 x12387</span>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>Address</h3>
              <span>1234 Somewhere Road #5432<br />
              Nashville, TN 00000<br />
              United States of America</span>
            </div>
          </section>
        </section>
      </div>
  )
}
}
export default withRouter(Signup)
