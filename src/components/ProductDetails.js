import React from 'react';

function ProductDetails({product}) {
    return (
        <div>
            <h1>{product.displayName}</h1>
            <img src={product.productImage} alt={product.displayName} />
        </div>
    );
}

export default ProductDetails;