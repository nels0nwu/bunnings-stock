import React, {Component, Fragment} from 'react';
import ProductDetails from '../components/ProductDetails';
import ProductStockLevels from '../components/ProductStockLevels';
import './App.css';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      stock: [],
      fetchError: false
    }

  }  

  // check fetch response for errors, eg 404 error
  handleResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  componentDidMount() 
  {
    // product info
    // https://www.bunnings.com.au/api/v1/producttile?region=VICMetro&productsId=1540746
    // store info
    // https://www.bunnings.com.au/api/v1/stores/6400
    // stock levels
    // https://www.bunnings.com.au/api/v1/store/6225/nearest/1000/0078679

    // const productId = '1540746';
    // using cors-anywhere to get around cross-origin request
    fetch(`https://cors-anywhere.herokuapp.com/https://www.bunnings.com.au/api/v1/producttile?region=VICMetro&productsId=${this.props.id}`)
    .then(response => this.handleResponse(response).json())
    .then(json => this.setState({ product: json[0] }))
    .then(() => {
      fetch(`https://cors-anywhere.herokuapp.com/https://www.bunnings.com.au/api/v1/store/6225/nearest/1000/${this.props.id}`)
        .then(response => this.handleResponse(response).json())
        .then(json => this.setState({ stock: 
          json
          //.filter(function(store) { return store.StockStatus[0].Message == "In stock"})
          .sort(function(a, b) {return a.StoreInfo.Postcode - b.StoreInfo.Postcode })
        }))
    })
    .catch((error) => {
      console.error('Product data fetch error: ' + error);
      this.setState( {fetchError: true} );
    });
  }

  render() {
    if (this.state.fetchError) {
      return (
        <Fragment>
          <h1>Product {this.props.id} not found</h1>
        </Fragment>
      );
    } else if (!this.state.stock.length) {
      return (
      <Fragment>
          <h1>Loading</h1>
      </Fragment>
      );
    } else {
      return (
        <Fragment>
          <ProductDetails product={this.state.product} />
          <ProductStockLevels stock={this.state.stock} />
        </Fragment>
      );
    }
  } 
}

export default Product;
