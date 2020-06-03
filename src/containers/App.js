import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./Product";
import "./App.css";
import "tachyons";

class App extends Component {
  render() {
    return (
      <div className="App">
        Bunnings have since locked down their API with extra checks, so for now
        the stock checker is taking a nap.
      </div>
    );
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/:productId"
              render={(props) => <Product id={props.match.params.productId} />}
            ></Route>
            <Route path="/">
              <h1>
                Add a Bunnings product code to the end of the url, like for{" "}
                <a href="/6290574">example</a>
              </h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
