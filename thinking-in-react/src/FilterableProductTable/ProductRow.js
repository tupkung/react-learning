import React from 'react'

const ProductRow = ({product}) =>
    <li className={product.stocked ? "product-item" : "product-item out-of-stock"}>
        <div>{product.name}</div>
        <div>{product.price}</div>
    </li>

export default ProductRow