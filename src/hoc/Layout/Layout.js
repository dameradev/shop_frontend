import React, { Component } from "react";
import { connect } from "react-redux";

import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Cart from "../../components/Cart/Cart";
import CartButton from "../../components/Cart/CartButton/CartButton";

import * as actions from "../../store/actions/index";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    showCart: false
  };
  cartOpenedHandler = () => {
    this.props.onFetchCart(this.props.userId);
    console.log("hereeeee");
    this.setState({ showCart: true });
  };

  cartClosedHandler = () => {
    this.setState({ showCart: false });
  };
  drawerToggleOpened = () => {
    this.setState({ showSideDrawer: true });
  };

  sideDrawerClosed = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.state.showCart}
          backDropClicked={this.cartClosedHandler}
        />
        <CartButton clicked={this.cartOpenedHandler} />
        <Cart show={this.state.showCart} />
        <Backdrop
          show={this.state.showSideDrawer}
          backDropClicked={this.sideDrawerClosed}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          isAuth={this.props.isAuthenticated}
        />
        <Toolbar
          drawerToggleClicked={this.drawerToggleOpened}
          isAuth={this.props.isAuthenticated}
        />

        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCart: userId => dispatch(actions.fetchCart(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
