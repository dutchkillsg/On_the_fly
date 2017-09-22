import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import firebase from 'firebase';
import { ref, firebaseAuth,} from '../helpers/fire'

import { auth } from '../helpers/auth';

let userId = ''




function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

function saveProfile(profile) {
  console.log(firebase.auth().currentUser)
  return ref.child('users/' + userId + '/profile')
    .set({
      restuarantN: profile.restuarantN,
      streetA: profile.streetA,
      city: profile.city,
      state: profile.state,
      zip: profile.zip
    })
    .then(() => profile)
}



class CreateProfile extends Component {

  state = { registerError: null }

  handleSubmit = (e) => {
    e.preventDefault()
    saveProfile(this.restuarantN.value, this.streetA.value, this.city.value, this.state.value, this.zip.value)
      // .catch(e => this.setState(setErrorMsg(e),))
    this.props.history.push('/Onthefly/Profile');

  }

  render() {
  return (
      <div id="signup" className="inner">

        <section>
          <h2>Some Extra Details</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="field first">
              <label htmlfor="email">Restuarant Name</label>
              <input type="text" name="restuarantN" id="restuarant" ref= {(restuarantN) => this.restuarantN = restuarantN}/>
            </div>
            <div className="field">
              <label htmlfor="email">Street Address</label>
              <input type="text" name="address" id="street" ref= {(streetA) => this.streetA = streetA} />
            </div>
            <div className="field">
              <label htmlfor="email">City</label>
              <input type="text" name="city" id="city" ref = {(city) => this.city = city} />
            </div>
            <div className="field">
              <label htmlfor="email">State</label>
              <input type="text" name="state" id="state" ref = {(state) => this.state = state} />
            </div>
            <div className="field">
              <label htmlfor="email">Zip</label>
              <input type="text" name="state" id="state" ref = {(zip) => this.zip = zip} />
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
      </div>
  )
  }



}

export default withRouter(CreateProfile);
