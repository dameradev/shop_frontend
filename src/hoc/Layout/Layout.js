import React, { Component } from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Cart from "../../components/Cart/Cart";
import CartButton from "../../components/Cart/CartButton/CartButton";
class Layout extends Component {
  state = {
    showSideDrawer: false,
    showCart: false
  };
  cartOpenedHandler = () => {
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
        <SideDrawer open={this.state.showSideDrawer} />
        <Toolbar drawerToggleClicked={this.drawerToggleOpened} />

        <main>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
