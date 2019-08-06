import React, { Component } from "react";
import classes from "./Cart.module.css";

class Cart extends Component {
  state = {};

  render() {
    return (
      <div className={classes.Cart}>
        <p>{this.state.quantity}</p>
      </div>
    );
  }
}
export default Cart;
