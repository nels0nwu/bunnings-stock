import React from 'react';

function ProductStockLevel({storeState, storePostcode, storeSuburb, stockMessage, stockCount}) {
    return (
        <div className="cf bt bb">
            <div className="fl w-20 pa1">{storeState}</div>
            <div className="fl w-20 pa1">{storePostcode}</div>
            <div className="fl w-20 pa1">{storeSuburb}</div>
            <div className="fl w-20 pa1">{stockMessage}</div>
            <div className="fl w-20 pa1">{stockCount}</div>
        </div>
    );
}

export default ProductStockLevel;