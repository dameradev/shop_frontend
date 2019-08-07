import React, { Component } from "react";
import classes from "./Shop.module.css";
import Restaurants from "./Restaurants/Restaurants";

class Shop extends Component {
  state = {
    showCart: true
  };
  componentDidMount() {
    console.log("SHOPPPPP PROSPSS", this.props);
  }

  render() {
    return (
      <div className={classes.Shop}>
        <h3>Restaurants page</h3>
        <hr />
        <Restaurants />
      </div>
    );
  }
}

export default Shop;
