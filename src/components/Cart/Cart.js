import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../apis/shopBackend";
import classes from "./Cart.module.css";
import * as actions from "../../store/actions/index";

class Cart extends Component {
  state = {
    cartItems: []
  };

  loadData() {
    this.props.onFetchCart();
  }
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.show !== this.props.show) {
      this.props.onFetchCart();
    }
  }

  render() {
    console.log(this.props.cart.items);
    const foods = this.props.cart.items
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

    return this.props.show ? (
      <div className={classes.Cart}>
        <h3>Your cart</h3>
        {foods}
        {/* <p>{this.state.cartItems}</p> */}
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    cart: { items: state.cart.items }
  };
};

const mapDipatchToProps = dispatch => {
  return {
    onFetchCart: () => dispatch(actions.fetchCart())
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(Cart);
