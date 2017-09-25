import React, { Component } from 'react';
import { Landingheader } from '../components/lander'
import firebase from 'firebase';
import { logout } from '../helpers/auth';

const currentUser = firebase.auth().currentUser

var addRest = firebase.database().ref('users/' + currentUser + '/info/profile')

class Profile extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    addRest.push()
    }


  render(){
    return (
        <div id="wrapper">
          <Landingheader
            loginout= 'logout'
             />
          <h1>Fill out your Profile</h1>
            <form onSubmit = {this.handleSubmit} >
              <div className="field first">
                <label htmlFor="restaurant">Resturant Name</label>
                <input type="text" name="restaurant" id="restaurant" ref={(resturant) => this.resturant = resturant} />
              </div>
              <div className="field ">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" ref={(address) => this.address = address}/>
              </div>
              <ul className="actions">

                <li><input type="submit" value="Submit" className="special" /></li>
                <li><input type="reset" value="Clear" /></li>
              </ul>
            </form>
        </div>
    )
  }
}


export default Profile;
