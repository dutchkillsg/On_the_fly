import React, { Component } from 'react';
import ProductRow from './ProductRow'


class ProductTable extends Component{

    render() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {

            if (product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }


            rows.push(<ProductRow product={product} key={product.name} removeItem={this.props.removeItem } />);
            lastCategory = product.category;
        }.bind(this));
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th id="price">Price</th>
                        <th>Category</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default ProductTable;
