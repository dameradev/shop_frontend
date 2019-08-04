import React, { Component } from "react";
import { Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Shop from "./containers/Shop/Shop";
import CreateRestaurant from "./components/Restaurants/CreateRestaurant/CreateRestaurant";
import SingleRestaurant from "./components/Restaurants/SingleRestaurant/SingleRestaurant";

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/" exact component={Shop} />
        <Route path="/shop/:id" component={SingleRestaurant} />
        <Route path="/create-restaurant" component={CreateRestaurant} />
      </Layout>
    );
  }
}

export default App;
