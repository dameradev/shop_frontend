import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./Cart.module.css";
import * as actions from "../../store/actions/index";

class Cart extends Component {
  componentDidMount() {
    console.log(this.props.userId);
    this.props.onFetchCart(this.props.userId);
  }

  render() {
    let foods = <p>Your cart is empty</p>;
    // return <p>dame</p>;

    if (this.props.items.length > 0) {
      foods = this.props.items.map(foodItem => {
        return (
          <div className={classes.FoodItem} key={foodItem._id}>
            <div>
              <h2>{foodItem.name}</h2>
              <span onClick={() => this.props.onAddQuantity(foodItem._id)}>
                <i className="fa fa-plus-square" />
              </span>

              <span onClick={() => this.props.onRemoveQuantity(foodItem._id)}>
                <i className="fa fa-minus-square" />
              </span>
              <p>Quantity: {foodItem.quantity}</p>
            </div>
            <div>
              <img src="http://www.pngmart.com/files/1/Pepperoni-Pizza.png" />
            </div>
          </div>
        );
      });
    }

    return this.props.show ? (
      <div className={classes.Cart}>
        <h3>Shopping cart</h3>
        {foods}
        <p className={classes.TotalPrice}>
          <span>
            Total Price:
            <span className={classes.TotalPriceTag}>{this.props.total}$</span>
          </span>
          <Link to="/checkout" className={classes.TotalPriceTag}>
            Checkout
          </Link>
        </p>
        {/* <p>{this.state.cartItems}</p> */}
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.addedItems || [],
    total: state.cart.total,
    userId: state.auth.userId
  };
};

const mapDipatchToProps = dispatch => {
  return {
    onFetchCart: userId => dispatch(actions.fetchCart(userId)),
    onAddQuantity: id => dispatch(actions.addQuantity(id)),
    onRemoveQuantity: id => dispatch(actions.removeQuantity(id))
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(Cart);
