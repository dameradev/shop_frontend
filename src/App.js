import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Shop from "./containers/Shop/Shop";
import CreateRestaurant from "./components/Restaurants/CreateRestaurant/CreateRestaurant";
import SingleRestaurant from "./containers/SingleRestaurant/SingleRestaurant";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
// import CreateFood from "./components/Food/CreateFood/CreateFood";

import * as actions from "./store/actions/index";

class App extends Component {
  componentDidMount() {
    this.props.onTryAuthLogin();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Shop} />
        <Route path="/shop/:id" component={SingleRestaurant} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/shop/:id" component={SingleRestaurant} />
          <Route path="/create-restaurant" component={CreateRestaurant} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return <Layout>{routes}</Layout>;
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
