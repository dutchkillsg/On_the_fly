import React, { Component } from 'react'
import { ref } from '../helpers/fire'
import { withRouter } from "react-router-dom";



class Bar extends Component {
  getInitialState: () => {

      category: '',
      price: '',
      name: '',
      stocked: ''
    };

  componentWillMount: () => {

  }

  onChange = (e) => {
    var nextState = {};
    nextState[e.target.name]=e.target.value;
    this.setState(nextState);
  }


  removeItem = (key) => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.name.trim().length !== 0) {
      this.firebaseRefs['products'].push({
        category: this.state.category,
        price: this.state.price, // "name:" changes the input attribute category
        name: this.state.name,
        stocked: this.state.stocked
      });
      this.setState({
        category: '',
        price: '',
        name: '',
        stocked: 'True'
      });
    }

  }

  render(){
    return(
      <div className="container profilepadding">
        <h2 className= 'title'>Input Products</h2>
        <form onSubmit={ this.handleSubmit }>
          <div className="field first">
            <label >Category</label>
            <select onChange={ this.onChange } name="category" className="form-control standalone" type="select" label="Select" placeholder="select">
              <option value="" defaultValue>Select</option>
              <option value="Sporting Goods">Sporting Goods</option>
              <option value="Electronics">Electronics</option>
              <option value="Auto Parts">Auto Parts</option>
            </select>
          </div>
          <label htmlFor="email">Name</label>
            <input className= 'field' name="name"/>
          <label htmlFor="email">Price</label>
              <input className='field' name="price"/>
          <div className="">
            <label >In Stock?</label>
              <select onChange={ this.onChange } name="stocked" className="form-control standalone" type="select" label="Select" placeholder="select">
                <option value="" defaultValue>Select</option>
                <option value="True">True</option>
                <option value="">False</option>
              </select>
            </div>
            <button className="btn-default" ></button>
          </form>
        </div>

    )
  }
}

export default withRouter(Bar);
