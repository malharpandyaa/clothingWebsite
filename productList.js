import React from 'react';
import { productData } from '../data/ProductData';

function ProductList() {
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {productData.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <img src={product.image} alt={product.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
