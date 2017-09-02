import React, {Component} from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends Component {
    render() {
        const {products, showProductInStock, query} = this.props;
        const matchQuery = new RegExp(query, "i")
        const productCategories = products
            .map(p => p.category)
            .filter((value,index, self) => self.indexOf(value) === index)
            .map(c => {
                return {
                    category: c,
                    products: products.filter(p => p.category === c 
                        && (showProductInStock ? p.stocked : true)
                        && (query===""? true : matchQuery.test(p.name)) )
                }
            })
        return (
            <div className="product-table">
                <ol className="product-display">
                    <li className="product-header">
                        <div>Name</div>
                        <div>Price</div>
                    </li>
                    {productCategories
                        .map(pc=> 
                        [<ProductCategoryRow category={pc.category}/>]
                            .concat(pc.products.map(p=>
                                <ProductRow product={p} />    
                            ))
                    )}
                </ol>
            </div>
        )
    }
}

export default ProductTable