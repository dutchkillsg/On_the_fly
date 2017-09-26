import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { logout } from '../helpers/auth';
class Profile extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    logout()
    this.props.history.push('/Onthefly');
  }

  render(){
    return(
    <h1>Hello
      <button className='btn btn-success' onClick={this.handleSubmit}>logout</button>
    </h1>
    )
  }


}


export default withRouter(Profile);
