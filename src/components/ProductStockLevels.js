import React from 'react';
import ProductStockLevel from './ProductStockLevel';

function ProductStockLevels({stock}) {
    return (
        <div>
        {
            stock.map((stockLevel, index) => 
            {
                return (
                    <ProductStockLevel 
                        key={index} 
                        storeState={stockLevel.StoreInfo.State} 
                        storePostcode={stockLevel.StoreInfo.Postcode} 
                        storeSuburb={stockLevel.StoreInfo.Suburb} 
                        stockCount={stockLevel.StockStatus[0].StockCount} 
                    />);
            }) 
        }
        </div>
    );
}

export default ProductStockLevels;