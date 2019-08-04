import React, { Component } from "react";
import classes from "./Shop.module.css";
import Restaurants from "../../components/Restaurants/Restaurants";
class Shop extends Component {
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
