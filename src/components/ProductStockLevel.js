import React from 'react';

function ProductStockLevel({storeState, storePostcode, storeSuburb, stockCount}) {
    return (
        <div>
            {storeState}, {storePostcode}, {storeSuburb}, {stockCount}
        </div>
    );
}

export default ProductStockLevel;