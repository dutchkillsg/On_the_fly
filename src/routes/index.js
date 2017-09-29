import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Onthefly from './onthefly';
import Profile from './Profile'
import Bar from './Bar';
import Kitchen from './Kitchen';
import Hoststand from './Hoststand'
import { firebaseAuth } from '../helpers/fire'





export default class Main extends Component {
  state = {
    authed: false
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true
        })
      } else {
        this.setState({
          authed: false
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
  <Route path='/Onthefly' render={() => (
      this.state.authed ? (<Redirect to='/Profile/' />
  ) : (
    <Onthefly />
  )
    )} />

  <Route exact authed={this.state.authed} path="/Profile" render={() => (
      this.state.authed === false ? (<Redirect to='/Onthefly/' />
  ) : (
    <Profile />
  )
    )} />

  <Route authed={this.state.authed} path="/Profile/Hoststand" render={() => (
      this.state.authed === false ? (<Redirect to='/Onthefly/' />
  ) : (
    <Hoststand />
  )
    )} />

  <Route authed={this.state.authed} path="/Profile/Bar"
    render={() => (
      this.state.authed === false ? (<Redirect to='/Onthefly/' />) : (<Bar />)
    )} />

  <Route authed={this.state.authed} path="/Profile/Kitchen"
      render={() => (
        this.state.authed === false ? (<Redirect to='/Onthefly/' />) : (<Kitchen />)
      )} />
</Switch>
  </BrowserRouter>
)
  }
}
