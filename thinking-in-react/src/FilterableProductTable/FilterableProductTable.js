import React, {Component} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
    Products = [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ]

    constructor(props) {
        super(props)
        this.state = {
            showInStock: false,
            query: ''
        }
        this.onClickOnlyShowProduct = this.onClickOnlyShowProduct.bind(this)
        this.onSearch = this.onSearch.bind(this)
    }

    

    onClickOnlyShowProduct(event) {
        this.setState({
            showInStock: event.target.checked
        })
    }

    onSearch(event) {
        this.setState({
            query: event.target.value
        })
    }

    render() {
        const {showInStock, query} = this.state
        return (
            <div className="container">
                <SearchBar onSearch={this.onSearch} onClickOnlyShowProduct={this.onClickOnlyShowProduct}/>
                <ProductTable products={this.Products} showProductInStock={showInStock} query={query}/>
            </div>
        )
    }
}

export default FilterableProductTable