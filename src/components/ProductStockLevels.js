import React from 'react';

function ProductStockLevels({stock}) {
    return (
        <div>
            <div className="cf bb">
                <div className="fl w-10 pa1">State</div>
                <div className="fl w-20 pa1">Store Name</div>
                <div className="fl w-10 pa1">Postcode</div>
                <div className="fl w-20 pa1">Phone</div>
                <div className="fl w-20 pa1">Trading Hours</div>
                <div className="fl w-10 pa1">Stock Status</div>
                <div className="fl w-10 pa1">Stock Count</div>
            </div>
            {
                stock.map((stockLevel, index) => 
                {
                    return (
                        <div key={index} className="cf bt bb">
                            <div className="fl w-10 pa1">{stockLevel.StoreInfo.State}</div>
                            <div className="fl w-20 pa1">{stockLevel.StoreInfo.StoreName}</div>
                            <div className="fl w-10 pa1">{stockLevel.StoreInfo.Postcode}</div>
                            <div className="fl w-20 pa1">{stockLevel.StoreInfo.Phone}</div>                            
                            <div className="fl w-20 pa1">{stockLevel.StoreInfo.CurrentTradingHours.OpeningTime}-{stockLevel.StoreInfo.CurrentTradingHours.ClosingTime}</div>
                            <div className="fl w-10 pa1">{stockLevel.StockStatus[0].Message}</div>
                            <div className="fl w-10 pa1">{stockLevel.StockStatus[0].StockCount}</div>
                        </div>);
                }) 
            }
        </div>
    );
}

export default ProductStockLevels;