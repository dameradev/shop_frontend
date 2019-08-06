import React, { Component } from "react";
import classes from "./Shop.module.css";
import Restaurants from "./Restaurants/Restaurants";
import Cart from "../../components/Cart/Cart";

class Shop extends Component {
  restaurantSelectedHandler = id => {
    this.props.history.push({ pathname: "/shop/" + id });
  };
  render() {
    return (
      <div className={classes.Shop}>
        {/* <Cart /> */}
        <h3>Restaurants page</h3>

        <hr />
        <Restaurants />
      </div>
    );
  }
}

export default Shop;
