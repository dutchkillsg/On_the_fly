import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Landingheader } from '../components/lander';
import BookingPage from '../components/booking/BookingPage'
import { withRouter, NavLink } from "react-router-dom";
import { logout } from '../helpers/auth';


class Hoststand extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    logout()
  }

  render(){

    return(

      <div className='Host'>
      <Landingheader
        login = {<a onClick={this.handleSubmit} className="logo">Logout</a>}
        />
      <Menu isOpen={ true } noOverlay customCrossIcon={ false }>

             <NavLink to="/Profile" className="menu-item">Home</NavLink>
             <NavLink to="/Profile/Hoststand" className="menu-item">Host</NavLink>
             <NavLink to="/Profile/Bar" className="menu-item">Bar</NavLink>
             <NavLink to='/Profile/Bar' className="menu-item">Kitchen</NavLink>

      </Menu>
      <div className="container profilepadding">
        <BookingPage />
      </div>

      </div>

    )
  }
}


export default withRouter(Hoststand);
