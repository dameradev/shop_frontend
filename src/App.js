import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Shop from "./containers/Shop/Shop";
import CreateRestaurant from "./components/Restaurants/CreateRestaurant/CreateRestaurant";
import SingleRestaurant from "./containers/SingleRestaurant/SingleRestaurant";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
// import CreateFood from "./components/Food/CreateFood/CreateFood";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/shop/:id" component={SingleRestaurant} />
          <Route path="/create-restaurant" component={CreateRestaurant} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
        </Switch>
        {/* <Route path="/rate-restaurant" component={RateRestaurant} /> */}
      </Layout>
    );
  }
}

export default App;
