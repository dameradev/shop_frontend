import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Checkout.module.css";
// import ContactData from "./ContactData/ContactData";

import Button from "../../components/UI/Button/Button";
// import * as actions from "../../store/actions/index";
class Checkout extends Component {
  render() {
    const cartItems = this.props.items.map(cartItem => (
      <div key={cartItem._id} className={classes.CartItem}>
        <h4>{cartItem.foodId.name}</h4>
        <div className={classes.CartItemDetails}>
          <p>Quanitity: {cartItem.quantity}</p>
          <p>Price: {cartItem.foodId.price}$</p>
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
          <Button btnType="Success">Order</Button>
          {/* <ContactData /> */}
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

// const mapDispatchToProps = dispatch => {
//   return {
//     onPostCart: () => {
//       dispatch(actions.postCart());
//     }
//   };
// };

export default connect(mapStateToProps)(Checkout);
