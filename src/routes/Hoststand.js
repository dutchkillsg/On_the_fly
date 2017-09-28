import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Hoststand extends Component {
  render(){
    return(
      <div className="container profilepadding">
        <h2 className= 'title'>Host Stand</h2>
        <form onSubmit=''>
          <div className="field first">
            <label >Category</label>
            <select onChange='' name="category" className="form-control standalone" type="select" label="Select" placeholder="select">
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
              <select onChange='' name="stocked" className="form-control standalone" type="select" label="Select" placeholder="select">
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


export default withRouter(Hoststand);
