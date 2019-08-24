import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Checkout.module.css";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  render() {
    const cartItems = this.props.items.map(cartItem => (
      <div key={cartItem._id} className={classes.CartItem}>
        <h4>{cartItem.name}</h4>
        <div className={classes.CartItemDetails}>
          <p>Quanitity: {cartItem.quantity}</p>
          <p>Price: {cartItem.price}$</p>
        </div>
      </div>
    ));
    return (
      <div className={classes.Checkout}>
        <h1>Checkout page</h1>
        <div>
          <h3>Your cart items:</h3>
          {cartItems}
          <p className={classes.TotalPrice}>
            Total Price: {this.props.totalPrice}$
          </p>
          <ContactData />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.addedItems,
    totalPrice: state.cart.total
  };
};

export default connect(mapStateToProps)(Checkout);
