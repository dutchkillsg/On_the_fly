import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Landingheader } from '../components/lander';
import { slide as Menu } from 'react-burger-menu';
import Hoststand from './Hoststand'
import  Bar  from './Bar';
import Kitchen from './Kitchen';
import { Redirect  } from 'react-router';
import {withRouter, NavLink} from "react-router-dom";
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

        <Menu isOpen={ true } noOverlay customCrossIcon={ false }>

               <NavLink to="/Profile" className="menu-item">Home</NavLink>
               <NavLink to="/Profile/Hoststand" className="menu-item">Host</NavLink>
               <NavLink to="/Profile/Bar" className="menu-item">Bar</NavLink>
               <NavLink to='/Profile/Kitchen' className="menu-item">Kitchen</NavLink>

        </Menu>

        {this.props.children}

      </div>

    )
  }


}


export default withRouter(Profile);
