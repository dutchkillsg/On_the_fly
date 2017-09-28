import React, { Component } from 'react';

var _this = this;
class ProductRow extends Component{
  constructor(props){
    super(props);

      this.name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
          {this.props.product.name}
      </span>;
  }
    render() {
        return (
            <tr>
                <td>{name}</td>
                <td>${this.props.product.price}</td>
            	<td>{this.props.product.category}</td>
                <td onClick={ this.props.removeItem.bind(null, _this.props.product['.key']) } style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}>

          		</td>
            </tr>

        );
    }
}

export default ProductRow;
