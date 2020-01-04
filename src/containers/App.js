import React, {Component} from 'react';
import ProductDetails from '../components/ProductDetails';
import ProductStockLevels from '../components/ProductStockLevels';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      stock: []
    }
  }  

  componentDidMount() 
  {
      // product info
      // https://www.bunnings.com.au/api/v1/producttile?region=VICMetro&productsId=1540746
      // store info
      // https://www.bunnings.com.au/api/v1/stores/6400
      // stock levels
      // https://www.bunnings.com.au/api/v1/store/6225/nearest/1000/0078679

      const productId = '1540746';
      fetch(`https://cors-anywhere.herokuapp.com/https://www.bunnings.com.au/api/v1/producttile?region=VICMetro&productsId=${productId}`)
      .then(response => response.json())
      .then(json => this.setState({ product: json[0] }));

      fetch(`https://cors-anywhere.herokuapp.com/https://www.bunnings.com.au/api/v1/store/6225/nearest/1000/${productId}`)
      .then(response => response.json())
      .then(json => this.setState({ stock: json }));

      


      console.log('component did mount');
  }

  render() {
    return (
      <div className="App">
        <h1>Bunnings stock</h1>

        <ProductDetails product={this.state.product} />
        <ProductStockLevels stock={this.state.stock} />

        

      </div>
    );
  } 
}

export default App;
