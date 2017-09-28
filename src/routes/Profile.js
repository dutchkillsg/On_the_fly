import React, { Component } from 'react';
import { Landingheader } from '../components/lander';
import { slide as Menu } from 'react-burger-menu';
import Hoststand from './Hoststand'
import  Bar  from './Bar';
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

              <a href = '' className='menu-item'>Home</a>
               <NavLink to="/Profile/Hoststand" className="btn btn-primary">Host stand</NavLink>
               <NavLink to="/Profile/Bar" className="btn btn-primary">Bar</NavLink>
              <a href = '' className='menu-item'>Kitchen</a>
          </Menu>

              <Bar />
      </div>

    )
  }


}


export default withRouter(Profile);
