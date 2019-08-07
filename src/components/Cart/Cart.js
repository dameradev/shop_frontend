import React, { Component } from "react";
import axios from "../../apis/shopBackend";
import classes from "./Cart.module.css";

class Cart extends Component {
  state = {
    cartItems: []
  };

  loadData() {
    if (this.state.cartItems.length < 1) {
      axios
        .get("shop/get-cart")
        .then(response => {
          console.log("response");
          this.setState({ cartItems: response.data.items });
        })
        .then(() => console.log(this.state));
    }
  }
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.cartItems.items !== this.state.items ||
      prevProps.show !== this.props.show
    ) {
      axios
        .get("shop/get-cart")
        .then(response => {
          console.log("response");
          this.setState({ cartItems: response.data.items });
        })
        .then(() => console.log(this.state));
    }
  }

  render() {
    const foods = this.state.cartItems
      .map(ci => {
        return [ci["foodId"], ci["quantity"]];
      })
      .map(foodItem => {
        return (
          <div className={classes.FoodItem} key={foodItem[0]._id}>
            <h4>{foodItem[0].name}</h4>
            <p>Quantity: {foodItem[1]}</p>
          </div>
        );
      });

    console.log(foods);

    return this.props.show ? (
      <div className={classes.Cart}>
        <h3>Your cart</h3>
        {foods}
        {/* <p>{this.state.cartItems}</p> */}
      </div>
    ) : null;
  }
}
export default Cart;
