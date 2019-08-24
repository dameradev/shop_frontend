import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Cart.module.css";
import * as actions from "../../store/actions/index";

class Cart extends Component {
  loadData() {
    // this.props.onFetchCart();
  }
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.items !== this.props.items) {
      console.log("yes");
    }
  }

  render() {
    console.log(this.props.items);
    // return <p>dame</p>;
    const foods = this.props.items.map(foodItem => {
      return (
        <div className={classes.FoodItem} key={foodItem._id}>
          <h4>{foodItem.name}</h4>
          <p>Quantity: {foodItem.quantity}</p>
          <span onClick={() => this.props.onAddQuantity(foodItem._id)}>+</span>
          <span onClick={() => this.props.onRemoveQuantity(foodItem._id)}>
            -
          </span>
        </div>
      );
    });
    // return <div>{foods}</div>;
    console.log(foods);
    return this.props.show ? (
      <div className={classes.Cart}>
        <h3>Your cart</h3>
        {foods}
        <p>Total Price: {this.props.total}</p>
        {/* <p>{this.state.cartItems}</p> */}
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.addedItems,
    total: state.cart.total
  };
};

const mapDipatchToProps = dispatch => {
  return {
    onFetchCart: () => dispatch(actions.fetchCart()),
    onAddQuantity: id => dispatch(actions.addQuantity(id)),
    onRemoveQuantity: id => dispatch(actions.removeQuantity(id))
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(Cart);
