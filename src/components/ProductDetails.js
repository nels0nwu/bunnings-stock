import React from 'react';

function ProductDetails({product}) {
    return (
        <div>
            {product.displayName}
            <img src={product.productImage} title={product.displayName} />
        </div>
    );
}

export default ProductDetails;