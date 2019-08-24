import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Shop.module.css";
import Restaurants from "./Restaurants/Restaurants";
import Modal from "../../components/UI/Modal/Modal";

class Shop extends Component {
  state = {
    showCart: true
  };

  cartOpenedHandler = () => {
    this.setState({ showCart: true });
  };

  cartClosedHandler = () => {
    this.setState({ showCart: false });
  };

  render() {
    return (
      <div className={classes.Shop}>
        <Modal />
        <div className={classes.ShopHeader}>
          <h3>Restaurants page</h3>
          <Link to={"/create-restaurant"}>Create a new restaurant</Link>
        </div>

        <Restaurants />
      </div>
    );
  }
}

export default Shop;
