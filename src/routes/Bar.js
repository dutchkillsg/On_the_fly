import React, { Component } from 'react'
import firebase from 'firebase'
import { slide as Menu } from 'react-burger-menu';
import { Landingheader } from '../components/lander';
import { withRouter, NavLink } from "react-router-dom";
import { logout } from '../helpers/auth';


class Bar extends Component {
  getInitialState: () => {

      category: '',
      price: '',
      name: '',
      stocked: ''
    };

  onChange = (e) => {
    var nextState = {};
    nextState[e.target.name]=e.target.value;
    this.setState(nextState);
  }


  removeItem = (key) => {

  }

  logOut = (e) => {
    e.preventDefault()
    logout()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = firebase.auth().currentUser;
    console.log('users/'+user.uid+'/bar')
      firebase.database().ref('users/'+user.uid+'/bar').push({
        category: this.state.category,
        price: this.state.price,
        name: this.state.name,
        quantity:this.state.quantity,
        stocked: this.state.stocked
      });
      this.setState({
        category: '',
        price: '',
        name: '',
        quantity: '',
        stocked: 'True'
      });
  }

  render(){
    return(
      <div>
      <Landingheader
        login = {<a onClick={this.logOut} className="logo">Logout</a>}
        />
      <Menu isOpen={ true } noOverlay customCrossIcon={ false }>

             <NavLink to="/Profile" className="menu-item">Home</NavLink>
             <NavLink to="/Profile/Hoststand" className="menu-item">Host</NavLink>
             <NavLink to="/Profile/Bar" className="menu-item">Bar</NavLink>
             <NavLink to='/Profile/Kitchen' className="menu-item">Kitchen</NavLink>

      </Menu>
        <div className='profilepadding'>
        <h2 className= 'title bartitle'>Input Products</h2>
        <form onSubmit={ this.handleSubmit } className="barform">
          <div className="field first">
            <label >Category</label>
            <select onChange={ this.onChange } name="category" className="form-control standalone inputcolor" type="select" label="Select" placeholder="select" ref={(category) => this.category = category}>
              <option value="" defaultValue>Select</option>
              <option value="Liquor">Liquor</option>
              <option value="Beer">Beer</option>
              <option value="Misc">Misc</option>
            </select>
          </div>
          <div className='field'>
            <label htmlFor="name">Name</label>
            <input onChange={ this.onChange } className= 'field inputcolor' name="name" ref={(name) => this.name = name} />
          </div>
          <div className='field'>
            <label htmlFor="price">Price</label>
            <input onChange={ this.onChange } className='field inputcolor' name="price" ref={(price) => this.price = price} />
          </div>
          <div className='field'>
            <label htmlFor="quantity">Quantity</label>
            <input onChange={ this.onChange } className='field inputcolor' name="quantity" ref={(quantity) => this.quantity = quantity} />
          </div>
          <div className="field">
            <label>In Stock?</label>
            <select onChange={ this.onChange } name="stocked" className="form-control standalone" type="select" label="Select" placeholder="select" ref={(stocked) => this.stocked = stocked}>
              <option value="" defaultValue>Select</option>
              <option value="True">True</option>
              <option value="">False</option>
            </select>
            </div>
            <input type="submit" value="Submit" className="special" />
          </form>
          </div>

          </div>




    )
  }
}


export default withRouter(Bar);
