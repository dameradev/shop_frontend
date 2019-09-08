import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Shop from "./containers/Shop/Shop";
import CreateRestaurant from "./components/Restaurants/CreateRestaurant/CreateRestaurant";
import SingleRestaurant from "./containers/SingleRestaurant/SingleRestaurant";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import Auth from "./containers/Auth/Auth";
// import CreateFood from "./components/Food/CreateFood/CreateFood";

import * as actions from "./store/actions/index";

class App extends Component {
  componentDidMount() {
    this.props.onTryAuthLogin();
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/shop/:id" component={SingleRestaurant} />
          <Route path="/create-restaurant" component={CreateRestaurant} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
        </Switch>
        {/* <Route path="/rate-restaurant" component={RateRestaurant} /> */}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAuthLogin: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
