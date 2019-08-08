import React, { Component } from "react";
import { Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Shop from "./containers/Shop/Shop";
import CreateRestaurant from "./components/Restaurants/CreateRestaurant/CreateRestaurant";
import SingleRestaurant from "./components/Restaurants/SingleRestaurant/SingleRestaurant";
import RateRestaurant from "./components/Restaurants/RateRestaurant/RateRestaurant";

// import CreateFood from "./components/Food/CreateFood/CreateFood";

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/" exact component={Shop} />
        <Route path="/shop/:id" component={SingleRestaurant} />
        <Route path="/create-restaurant" component={CreateRestaurant} />
        <Route path="/rate-restaurant" component={RateRestaurant} />
      </Layout>
    );
  }
}

export default App;
