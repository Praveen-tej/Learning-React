import React from 'react';
function ProductCard({name, price, children}){
    return (
        <div className="product-card">
        <h2>Product name:{name}</h2>
        <div>Product Price₹{price}</div>
        {children}
        </div>
    )
}

export default ProductCard;