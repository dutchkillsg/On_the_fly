import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Onthefly from './onthefly';
import Profile from './Profile'
import { firebaseAuth } from '../helpers/fire'




function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
      : <Redirect to={{pathname: '/Onthefly/Profile', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
      : <Redirect to='/Onthefly' />}
    />
  )
}


export default class Main extends Component {
  state = {
    authed: false,
    loading: true,
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        })
      } else {
        this.setState({
          authed: false,
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render(){
    return(
  <BrowserRouter>
    <Switch>
      <Route path='/Onthefly' exact component={Onthefly} />
      <PrivateRoute authed={this.state.authed} path="/Onthefly/Profile" exact component={Profile} />
      <PublicRoute authed={this.state.authed} path="/Onthefly" exact component={Onthefly} />
    </Switch>
  </BrowserRouter>
)
  }
}
