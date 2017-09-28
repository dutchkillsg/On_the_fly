import React, { Component } from 'react';
import firebase from 'firebase';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { ref } from '../../helpers/fire.js'

class InventoryList extends Component{
  constructor(props){
    super(props);
      this.state.filterText = '',
      this.state.inStockOnly = false

    }

	componentWillMount () {
  ref('users').child('profile')
    this.bindAsArray(ref.limitToLast(8), 'products');
  }

	removeItem = (key) => {
    ref('users').child('profile')
    ref.child(key).remove();
  }

	handleUserInput = (filterText, inStockOnly) => {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    }

    render() {
        return (
            <div className="text-left">
            	<h2>Filter Inventory</h2>
                <SearchBar
                	filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput}
                 />
                <ProductTable
                	products={this.state.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    removeItem={ this.removeItem }
                 />
            </div>
        );
    }
}

export default InventoryList;
