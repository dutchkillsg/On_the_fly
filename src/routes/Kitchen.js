import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Landingheader } from '../components/lander';
import { withRouter, NavLink } from "react-router-dom";
import Hoststand from './Hoststand'
import  Bar  from './Bar';
import { logout } from '../helpers/auth';


class Kitchen extends Component{
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
      <h1 id="soon">COMING SOON</h1>
      </div>
    )
  }
}

export default Kitchen;
